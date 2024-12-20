// middleware/auth.js
import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";
interface JwtPayload {
  userId: string;
  isAdmin: boolean;
}

export function verifyToken(token: string): JwtPayload {
  const JWT_SECRET = process.env.jwt_secret!;
  if (!JWT_SECRET) {
    throw new Error('JWT secret is not defined in environment variables.');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // console.log('Decoded token:', decoded);  // Log the decoded token
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw new Error('Invalid or expired token');
  }
}