import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.jwt_secret!;
export const generateToken = (user: any) => {
 
  const payload = {
    userId: user.id,
    email: user.email,
  };

  // Generate the token with an expiration time (e.g., 1 hour)
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
  return token;
};
interface TokenPayload {
  userId: string;
  email: string;
}

