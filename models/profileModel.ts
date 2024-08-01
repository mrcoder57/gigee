import mongoose, { Schema, Document } from "mongoose";
import Bid from "./bidsModel";
import Gig from "./gigMOdel";

interface IProfile extends Document {
  userId: string;
  email: string;
  name: string;
  phone: string;
  city: string;
  education: string;
  languages: string[];
  socials: string[];
  Bids: mongoose.Types.ObjectId[];
  Gigs: mongoose.Types.ObjectId[];
}

const ProfileSchema: Schema<IProfile> = new Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },
  city: { type: String },
  education: { type: String },
  languages: [{ type: String }],
  socials: [{ type: String }],
  Bids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bid" }],
  Gigs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gig" }],
});

const Profile = mongoose.models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);
export default Profile;
