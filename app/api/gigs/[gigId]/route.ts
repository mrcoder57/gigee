import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";
import { verifyToken } from "@/utils/jwtHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

 const gigSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
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

export async function DELETE(req: any, { params }: any) {
  await connectToDb();

  const tokenError = verifyToken(req);
  if (tokenError) {
    return tokenError;
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
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}

// export async function PUT(req: any, { params }: any) {
//   try {
//     await connectToDb();

//     const tokenError = verifyToken(req);
//     if (tokenError) {
//       return NextResponse.json(tokenError, { status: 401 });
//     }

//     const { gigId } = params;
//     const userId = req.userId;
//     const isAdmin = req.isAdmin;

//     const { title, description, price, images } = await req.json();

//     const gig = await Gig.findById(gigId);
//     if (!gig) {
//       return NextResponse.json({ message: "Gig not found" }, { status: 404 });
//     }

//     if ((gig as any).userId.toString() !== userId && !isAdmin) {
//       return NextResponse.json(
//         { message: "Access denied. You are not the owner or an admin." },
//         { status: 403 }
//       );
//     }

//     const parsedData = gigSchema.parse({ title, description, price, images });

//     gig.title = parsedData.title;
//     gig.description = parsedData.description;
//     gig.price = parsedData.price;
//     (gig as any).images = parsedData.images;

//     await gig.save();

//     return NextResponse.json(
//       { message: "Gig updated successfully", gig },
//       { status: 200 }
//     );
//   } catch (error:any) {
//     return NextResponse.json(
//       { message: "An error occurred", error: error.message },
//       { status: 500 }
//     );
//   }
// }