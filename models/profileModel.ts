import mongoose, { Schema, Document } from "mongoose";

import { IUser } from "./userModel"; 

interface IProfile extends Document {
  userId: IUser["_id"];
  email: string;
  name: string;
  phone?: string; 
  city?: string;
  work?: string;
  education?: string;
  description?: string;
  profilePic?:string
  languages: string[];
  socials: string[];
  Bids: mongoose.Types.ObjectId[]; 
  Gigs: mongoose.Types.ObjectId[];
}

const ProfileSchema: Schema<IProfile> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  work: {
    type: String,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  languages: [{ type: String }],
  socials: [{ type: String }],
  Bids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bid" }],
  Gigs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gig" }],
});

const Profile = mongoose.models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);
export default Profile;
