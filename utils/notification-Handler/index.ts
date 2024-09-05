import Notification from '@/models/notifiactionModel';
import mongoose from 'mongoose';



export const createNotification = async (
  message: string,
  userId: mongoose.Types.ObjectId,
  taggedUserId: mongoose.Types.ObjectId | null,
  link: string
) => {
  try {
  
    const newNotification = new Notification({
      message,
      read: false, 
      userId,
      taggedUserId,
      link,
    });

    await newNotification.save();

    return newNotification;
  } catch (error : any) {
    throw new Error('Error creating notification: ' + error.message);
  }
};
