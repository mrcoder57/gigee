// middleware/auth.js
import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";
interface JwtPayload {
  userId: string;
  isAdmin: boolean;
}
export interface CustomNextRequest extends NextRequest {
  userId?: string;
  isAdmin?: boolean;
}

export function verifyToken(req: CustomNextRequest) {
  const authHeader = req.headers.get("Authorization");
  
  const token = authHeader;
  console.log("token",token);
  if (!token) {
    return NextResponse.json(
      { message: "Access denied. No token provided." },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret!) as JwtPayload;

    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    return null; // No error, proceed
  } catch (error) {
    return NextResponse.json({ message: "Invalid token." }, { status: 400 });
  }
}
