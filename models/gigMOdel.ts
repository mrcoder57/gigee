import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./userModel";
export interface IGig extends Document {
  title: string;
  description: string;
  price: number;
  location:string;
  statusActive:boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: IUser["_id"]; 
  image: string;
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
    location:{
      type:String,
      required:true
    },
    statusActive:{
      type:Boolean,
      default:true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: String,
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
