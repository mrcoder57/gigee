import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./userModel";
export interface IGig extends Document {
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  userId: IUser["_id"]; // Reference to the User model
  images: string[];
}

const gigSchema: Schema<IGig> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Gig: Model<IGig> =
  mongoose.models.Gig || mongoose.model<IGig>("Gig", gigSchema);

export default Gig;
