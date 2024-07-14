import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";

import { verifyToken } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { CustomNextRequest } from "@/middleware/auth";

const gigSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  location:z.string(),
  statusActive:z.boolean(),
  price: z.number().positive(),
  images: z.array(z.string()).optional(),
});

export async function GET(req: NextRequest, { params }: any) {
  await connectToDb();

  const { gigId } = params;

  try {
    const gig = await Gig.findById(gigId);

    if (!gig) {
      return NextResponse.json({ message: "Gig not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Gig fetched successfully", gig },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: any,
  { params }: { params: { gigId: string } }
) {
  await connectToDb();

  const tokenError = verifyToken(req);

  if (tokenError) {
    return NextResponse.json({ message: tokenError }, { status: 401 });
  }

  const { gigId } = params;
  const userId = req.userId;
  const isAdmin = req.isAdmin;

  try {
    const gig = await Gig.findById(gigId);

    if (!gig) {
      return NextResponse.json({ message: "Gig not found" }, { status: 404 });
    }

    if ((gig as any).userId.toString() !== userId && !isAdmin) {
      return NextResponse.json(
        { message: "Access denied. You are not the owner or an admin." },
        { status: 403 }
      );
    }

    await Gig.findByIdAndDelete(gigId);

    return NextResponse.json(
      { message: "Gig deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
export async function PUT(req: any, { params }: { params: { gigId: string } }) {
  try {
    await connectToDb();

    const tokenError = verifyToken(req);
    if (tokenError) {
      return NextResponse.json(tokenError, { status: 401 });
    }

    const { gigId } = params;
    const userId = req.userId;
    const isAdmin = req.isAdmin;

    const { title, description, price, images,location,statusActive } = await req.json();

    const gig = await Gig.findById(gigId);
    if (!gig) {
      return NextResponse.json({ message: "Gig not found" }, { status: 404 });
    }

    if ((gig as any).userId.toString() !== userId && !isAdmin) {
      return NextResponse.json(
        { message: "Access denied. You are not the owner or an admin." },
        { status: 403 }
      );
    }

    const parsedData = gigSchema.parse({ title, description, price, images,location,statusActive });

    gig.title = parsedData.title;
    gig.description = parsedData.description;
    gig.price = parsedData.price;
    gig.location=parsedData.location;
    gig.statusActive=parsedData.statusActive;
    (gig as any).images = parsedData.images;

    await gig.save();

    return NextResponse.json(
      { message: "Gig updated successfully", gig },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
