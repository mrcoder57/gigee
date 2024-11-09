import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "@/dbConfig/dbCon";
import User, { IUser } from "@/models/userModel";
import Profile from "@/models/profileModel";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwtHandler";
const clientId = process.env.GITHUB_ID || "";
const clientSecret = process.env.GITHUB_SECRET || "";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Connect to the database
          await connectToDb();

          // Find the user by email
          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("User not found");
          }

          // Verify the password
          if (!user.password) {
            throw new Error("Invalid password");
          }
          const isPasswordValid = await bcrypt.compare(
            credentials?.password || "",
            user.password
          );
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          // // Optionally, check if OTP or email verification is required
          // if (user.otp) {
          //   throw new Error("OTP verification required");
          // }

          // Return the user object if successful
          return {
            id: (user as any)._id.toString(),
            name: user.username,
            email: user.email,
            role: user.userRole,
          };
        } catch (error) {
          console.log(error);
          throw new Error("Error logging in");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Ensures token-based session
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectToDb();

      // Check if the user exists in the database
      let dbUser = await User.findOne({ email: user.email });

      // If the user doesn't exist, create a new one
      if (!dbUser) {
        dbUser = await User.create({
          email: user.email,
          username: user.name || (profile as any)?.login || "GitHub User",
        });

        // Create a profile for the new user
        const userProfile = new Profile({
          userId: dbUser._id,
          name: dbUser.username,
          email: dbUser.email,
        });
        await userProfile.save(); // Ensure profile is saved to the database
        console.log("New user and profile created:", user.email);
      }

      // Attach the MongoDB _id to the token for future callbacks
      user.id = (dbUser as any)._id.toString();
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const jwtToken = generateToken(user); // Generates the token with user info

        // Add the token to the session
        token.encryptedToken = jwtToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Initialize session.user as an object with the right properties if it doesn’t exist
      session.user = {
        id: token.id as string, // Specify this explicitly as a string
        name: session.user?.name || null,
        email: session.user?.email || null,
        image: session.user?.image || null,
      };
      session.token = token.encryptedToken as string; // Add the token to the session
      return session;
    },
  },

  pages: {
    error: "/auth/", // Optional: custom error page path
  },
});

export { handler as GET, handler as POST };
