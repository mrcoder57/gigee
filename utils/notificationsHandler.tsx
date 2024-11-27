import connectToDb from "@/dbConfig/dbCon";
import Notification from "@/models/notifiactionModel"; // Fixed typo in model import
import { IUser } from "@/models/userModel";
import { sendNotification } from "./socket";
import { any } from "zod";

interface CreateNotificationParams {
  message: string;
  userId: IUser["_id"];
  targetUserId: IUser["_id"];
  link: string;
}

export const createNotification = async ({
  message,
  userId,
  targetUserId,
  link,
}: CreateNotificationParams) => {
  await connectToDb();
 

  try {
    const notification = new Notification({
      message,
      userId,
      targetUserId,
      link,
    });
    await sendNotification({
      message: notification.message,
      userId: notification.userId as string,
      targetUserId: notification.targetUserId as string,
      link: notification.link,
    });
    //  const savedNotification = await notification.save();
    console.log('Saved notification:');
  

    // Emit the notification event via socket before saving
   

    // Save the notification to the database after emitting

    // console.log('Notification saved:', notification);
    return notification;
  } catch (error) {
    console.error("Error creating notification:", error);
  }
};
