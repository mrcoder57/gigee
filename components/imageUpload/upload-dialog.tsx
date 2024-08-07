"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { uploadImage } from "@/middleware/cloudinary";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoCamera } from "react-icons/io5";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import axios from "axios";
import { config } from "@/utils/api-handler";
import { Button } from "../ui/button";
interface UploadComponentProps {
  onImageUpload: (url: string) => void;
  userId: string;
}

const UploadDialog: React.FC<UploadComponentProps> = ({
  onImageUpload,
  userId,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image) {
      try {
        const url = await uploadImage(image);
        setImageUrl(url);
        onImageUpload(url);

        toast.success("image upload successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const saveImage = async () => {
    try {
      const response = await axios.put(
        `/api/profile/${userId}`,
        { profilePic: imageUrl },
        config
      );

      toast.success("ProfilePic saved successfully");
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="outline" className="w-16 cursor-pointer">
          <IoCamera size={20} /> Add
        </Badge>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <DialogTitle className="block text-sm font-medium text-gray-700">
              Choose an image
            </DialogTitle>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-block bg-[#FF5A5F] hover:bg-[#ce565a] text-white py-2 px-4 rounded-md transition duration-300"
            >
              Upload
            </button>
          </div>
        </form>
        {imageUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Image URL:{" "}
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {imageUrl}
              </a>
            </p>
            <img
              src={imageUrl}
              alt="Uploaded"
              className="mt-2 rounded-lg"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        <Button variant="link" onClick={saveImage}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
