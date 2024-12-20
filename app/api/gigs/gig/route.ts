import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";
import { z } from "zod";
import { verifyToken } from "@/middleware/auth";
import Profile from "@/models/profileModel";

const gigSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  price: z.number().optional(),
  location: z
    .object({
      name: z.string().nonempty("Location name is required"),
      coordinates: z
        .array(z.number())
        .length(2, "Coordinates must be an array with two elements: [latitude, longitude]")
        .refine((val) => val[0] >= -90 && val[0] <= 90, {
          message: "Latitude must be between -90 and 90",
        })
        .refine((val) => val[1] >= -180 && val[1] <= 180, {
          message: "Longitude must be between -180 and 180",
        }),
    })
    .optional(), // Optional location
  activities: z.array(z.string()).optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  category: z.enum([
    "Hiring",
    "Gig Jobs",
    "Sports",
    "Coding Contest",
    "Cultural Events",
    "Festivals",
    "Picnic",
    "Guest Lectures",
    "Workshops",
  ]),
  jobStarts: z.string().datetime("Invalid start date").optional(),
  jobEnds: z.string().datetime("Invalid end date").optional(),
});

// Infer types from the Zod schema for type safety
type GigInput = z.infer<typeof gigSchema>;

export async function POST(req: NextRequest) {
  try {
    // 1. Connect to the database
    await connectToDb();

    // 2. Validate the Authorization header and verify the token
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Token is missing or invalid in the Authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = verifyToken(token);
    if (!decoded || !decoded.userId) {
      return NextResponse.json(
        { message: "Unauthorized: Invalid token" },
        { status: 401 }
      );
    }
    const userId = decoded.userId;

    // 3. Parse and validate the request body
    const body = await req.json();
    const validatedData: GigInput = gigSchema.parse(body);

    // 4. Find the profile associated with the user
    const profile = await Profile.findOne({ userId }).select("name");
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found. Please complete your profile first." },
        { status: 404 }
      );
    }

    // 5. Create the new Gig
    const newGig = new Gig({
      title: validatedData.title,
      description: validatedData.description,
      price: validatedData.price,
      location: validatedData.location ? {
        name: validatedData.location.name,
        coordinates: validatedData.location.coordinates,
      } : undefined, // Handle optional location
      activities: validatedData.activities || [],
      creatorName: profile.name,
      image: validatedData.image || "",
      category: validatedData.category,
      jobStarts: validatedData.jobStarts ? new Date(validatedData.jobStarts) : undefined,
      jobEnds: validatedData.jobEnds ? new Date(validatedData.jobEnds) : undefined,
      userId,
    });

    await newGig.save();

    // 6. Respond with success
    return NextResponse.json(
      { message: "Gig created successfully", gig: newGig },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      // Handle Zod validation errors
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating gig:", error.message || error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message || "An unknown error occurred" },
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
