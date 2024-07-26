import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  await connectToDb();

  try {
    const { query } = req.query;

    let gigs;
    if (query) {
      gigs = await Gig.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { location: { $regex: query, $options: "i" } },
        ],
      }).limit(10);
    } else {
      return NextResponse.json(
        { message: "seacrh query required" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "search results", gigs },
      { status: 400 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "userId is required" },
      { status: 400 }
    );
  }
}
