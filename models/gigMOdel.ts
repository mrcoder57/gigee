import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./userModel";

export interface IGig extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  statusActive: boolean;
  creatorName: string;
  jobStarts: Date;
  jobEnds: Date;
  skillsRequired: string[];
  category: string;
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
    location: {
      type: String,
      required: true,
    },
    statusActive: {
      type: Boolean,
      default: true,
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
    creatorName: {
      type: String,
      required: false,
    },
    jobStarts: {
      type: Date,
      required: false,
    },
    jobEnds: {
      type: Date,
      required: false,
    },
    skillsRequired: {
      type: [String],
      required: false,
    },
    category: {
      type: String,
      enum: [
        "Hiring",
        "Gig Jobs",
        "Sports",
        "Coding Contest",
        "Cultural Events",
        "Festivals",
        "Picnic",
        "Guest Lectures",
        "Workshops",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gig: Model<IGig> =
  mongoose.models.Gig || mongoose.model<IGig>("Gig", gigSchema);

export default Gig;
