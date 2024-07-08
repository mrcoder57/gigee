import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  otp?: string;

  otpExpiry?: Date;
  isAdmin:boolean;
 userRole: 'seller' | 'consumer';
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isVerified: {
    type:Boolean,
    default:false
  },
  otp: {
    type: String,
    required: false,
  },

  otpExpiry: {
    type: Date,
    required: false,
  },
  userRole: {
    type: String,
    required: true,
    enum: ['seller', 'consumer'],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
