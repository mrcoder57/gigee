import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./userModel";

export interface IGig extends Document {
  title: string;
  description: string;
  price?: number;
  location?: {
    name: string;
    coordinates: [number, number]; // [latitude, longitude]
  };
  statusActive: boolean;
  creatorName: string;
  jobStarts?: Date;
  jobEnds?: Date;
  activities?: string[]; // Fixed typo
  category: string;
  createdAt: Date; // From timestamps
  updatedAt: Date; // From timestamps
  userId: IUser["_id"];
  image?: string;
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
      required: false,
    },
    location: {
      name: { type: String, required: true },
      coordinates: {
        type: [Number], // Array with two numbers: [latitude, longitude]
        validate: {
          validator: function (val: number[]) {
            return (
              val.length === 2 &&
              val[0] >= -90 &&
              val[0] <= 90 &&
              val[1] >= -180 &&
              val[1] <= 180
            );
          },
          message: "Coordinates must be [latitude, longitude] within valid ranges",
        },
        required: true,
      },
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
    activities: {
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
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create or reuse the model
const Gig: Model<IGig> =
  mongoose.models.Gig || mongoose.model<IGig>("Gig", gigSchema);

export default Gig;
