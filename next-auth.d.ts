// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add id to session.user
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    token?: string; // Add token to the Session type
  }

  interface User {
    id: string; // Add id to the User type
  }
}
