import connectToDb from "@/dbConfig/dbCon";
import Gig from "@/models/gigMOdel";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const querySchema = z.object({
  query: z.string().min(1, "Query parameter is required"),
});

export async function GET(req: NextRequest) {
  await connectToDb();

  try {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    const parsedQuery = querySchema.safeParse(queryParams);

    if (!parsedQuery.success) {
      return NextResponse.json(
        { message: "Invalid query parameter", errors: parsedQuery.error.errors },
        { status: 400 }
      );
    }

    const { query } = parsedQuery.data;

    const gigs = await Gig.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ],
    });

    return NextResponse.json(
      { message: "Search results", gigs },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching API", error },
      { status: 500 }
    );
  }
}
