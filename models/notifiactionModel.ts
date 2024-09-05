import mongoose, { Schema, Document, Model } from 'mongoose';
import { IUser } from './userModel';  


interface INotification extends Document {
  message: string;
  read: boolean;
  userId: IUser['_id'];     
  targetUserId: IUser['_id']; 
  link: string;               
}


const NotificationSchema: Schema<INotification> = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetUserId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Notification model
const Notification: Model<INotification> = mongoose.models.Notification || mongoose.model<INotification>('Notification', NotificationSchema);

export default Notification;
