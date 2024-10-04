import Notification from '@/models/notifiactionModel'; 
import { IUser } from '@/models/userModel'; 
import { io } from 'socket.io-client';
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

    await notification.save();
    console.log('Notification created:', notification);
   
  } catch (error) {
    console.error('Error creating notification:', error);
  }
};
