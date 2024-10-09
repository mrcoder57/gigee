import Notification from '@/models/notifiactionModel'; // Fixed typo in model import
import { IUser } from '@/models/userModel'; 
import { socketInstance } from './socket';
import { any } from 'zod';

interface CreateNotificationParams {
  message: string;
  userId: IUser['_id'];
  targetUserId: IUser['_id'];
  link: string;
}

export const createNotification = async ({
  message,
  userId,
  targetUserId,
  link,
}: CreateNotificationParams) => {
  try {
    const notification = new Notification({
      message,
      userId,
      targetUserId,
      link,
    });

    // Emit the notification event via socket before saving
    socketInstance.emit("send_notification",notification , (e: any) => {
      try {
        console.log('Notification emitted:', e.message);
      } catch (error) {
        console.error('Error in callback:', error);
      }
    });

    // Save the notification to the database after emitting
    await notification.save();
    // console.log('Notification saved:', notification);

  } catch (error) {
    console.error('Error creating notification:', error);
  }
};
