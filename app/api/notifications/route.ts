import { NextResponse } from "next/server";
import connectToDb from "@/dbConfig/dbCon";
import { verifyToken } from "@/middleware/auth";
import Notification from "@/models/notifiactionModel"; // Ensure the import is correct

export async function GET(req: any) {
  try {
    await connectToDb();

    const tokenError = verifyToken(req);
    if (tokenError) {
      return NextResponse.json(tokenError, { status: 401 });
    }

    const userId = req.userId;

    const notifications = await Notification.find({ targetUserId: userId });

    return NextResponse.json({
      message: "Notifications fetched successfully",
      notifications,
    },{
      status: 200,});
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      {
        message: "Error fetching notifications",
        error: "Server error",
      },
      { status: 500 }
    );
  }
}
