import mongoose, { Document, Model, Schema } from "mongoose";
import { IGig } from "./gigMOdel";
import { IUser } from "./userModel";

export interface IBid extends Document {
  gigId: IGig["_id"]; // Reference to the Gig model
  userId: IUser["_id"]; // Reference to the User model
  amount: number;
  message:String
  createdAt: Date;
  updatedAt: Date;
}

const bidSchema: Schema<IBid> = new Schema(
  {
    gigId: {
      type: Schema.Types.ObjectId,
      ref: "Gig",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    message: {
        type: String,
        required: false,
      },
  },
  {
    timestamps: true,
  }
);

const Bid: Model<IBid> =
  mongoose.models.Bid || mongoose.model<IBid>("Bid", bidSchema);

export default Bid;
