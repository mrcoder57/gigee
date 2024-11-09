import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";
import { z } from "zod";
import { verifyToken } from "@/middleware/auth";
import Profile from "@/models/profileModel";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
const gigSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  location: z.string(),
  price: z.number().positive(),
  image: z.string().optional(),
  category: z.string().optional(),
  jobStarts: z.string().optional(),
  jobEnds: z.string().optional(),
});

export async function POST(req: any) {
  await connectToDb();

  // Fetch token from the Authorization header
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  // console.log(token);
  if (!token) {
    return NextResponse.json(
      { message: "Token is missing from Authorization header" },
      { status: 401 }
    );
  }

  // Verify the token
  const tokenError = verifyToken(req);  // Assuming your verifyToken function takes the token string
  if (tokenError) {
    return tokenError;  // Return the error response if the token is invalid
  }

  let parsedBody;
  try {
    parsedBody = await req.json();
    const { title, description, price, image, location, category, jobStarts, jobEnds } =
      gigSchema.parse(parsedBody); // This could throw an error if invalid

    // Extract userId from the token (usually from the payload)
    const userId = req.userId;  // Assuming verifyToken sets req.userId or returns it
      console.log("user", userId);
    if (!userId) {
      return NextResponse.json(
        { message: "userId is required" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ userId }).select("name");
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }

    const newGig = new Gig({
      title,
      description,
      price,
      userId,
      location,
      creatorName: profile.name,
      image,
      category,
      jobStarts,
      jobEnds,
    });

    await newGig.save();

    return NextResponse.json(
      { message: "Gig created successfully", newGig },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating gig:", error.message || error);
    return NextResponse.json(
      { message: "Error creating gig", error: error.message || "An unknown error occurred" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectToDb();

  try {
    const gigs = await Gig.find().exec();

    return NextResponse.json(
      { message: "Gigs fetched successfully", gigs },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}
