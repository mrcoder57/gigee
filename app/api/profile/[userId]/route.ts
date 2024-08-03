import Profile from "@/models/profileModel";
import User from "@/models/userModel";
import Gig from "@/models/gigMOdel";
import Bid from "@/models/bidsModel";
import { z } from "zod";
import { verifyToken } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/dbConfig/dbCon";

const profileSchema = z.object({
  email: z.string().email("Invalid email address").optional(),
  name: z.string().optional(),
  phone: z.string().optional(),
  city: z.string().optional(),
  work: z.string().optional(),
  education: z.string().optional(),
  profilePic: z.string().optional(),
  languages: z.array(z.string()).optional(),
  socials: z.array(z.string()).optional(),
  Bids: z.array(z.string()).optional(),
  Gigs: z.array(z.string()).optional(),
});

export async function PUT(
  req: any,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDb();

    const tokenError = verifyToken(req);
    if (tokenError) {
      return tokenError;
    }

    const ruserId = req.userId;
    const { userId } = params;
    const isAdmin = req.isAdmin;
    const body = await req.json();

    const parsedBody = profileSchema.parse(body);

    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }

    if (profile.userId.toString() !== ruserId && !isAdmin) {
      return NextResponse.json(
        { message: "Forbidden: You are not authorized" },
        { status: 403 }
      );
    }

    Object.assign(profile, parsedBody);
    await profile.save();

    return NextResponse.json(
      { message: "Profile updated successfully", profile },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDb();

    const { userId } = params;

    const profile = await Profile.findOne({ userId })
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ profile }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
