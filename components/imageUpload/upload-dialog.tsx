"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { uploadImage } from "@/middleware/cloudinary";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoCamera } from "react-icons/io5";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import axios from "axios";
import { getSession } from "next-auth/react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import Image from "next/image";

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
  const [isUploading, setIsUploading] = useState<boolean>(false); // New state for upload progress

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(file);

      // Create a preview URL for the selected image
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      setIsUploading(true); // Start uploading
      try {
        const url = await uploadImage(image);
        setImageUrl(url); // Update the image URL with the uploaded image URL
        onImageUpload(url); // Pass the uploaded image URL to parent component
        toast.success("Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image");
      } finally {
        setIsUploading(false); // Stop uploading
      }
    }
  };

  const saveImage = async () => {
    const session = await getSession();
    if (!session?.token) {
      toast.error("You must be logged in to upload an image.");
      return;
    }

    try {
      const response = await axios.put(
        `/api/profile/${userId}`,
        { profilePic: imageUrl },
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        }
      );
      toast.success("Profile picture saved successfully");
    } catch (err: any) {
      toast.error(err.message || "An unknown error occurred");
    }
  };

  const deleteImage = () => {
    // Clear the image and URL states
    setImage(null);
    setImageUrl("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="outline" className="w-16 cursor-pointer">
          <IoCamera size={20} /> Add
        </Badge>
      </DialogTrigger>
      <DialogContent className="py-4 h-auto">
        <div className="flex flex-col items-center justify-start w-full py-3">
          <div className="flex flex-col w-full items-start gap-y-2">
            <h2 className={`text-rose-400 text-[15px] font-[600]`}>
              Upload a profile picture
            </h2>
            <div className="flex flex-col w-full h-[200px] gap-y-3 border-[0.5px] border-[#A0BACE] rounded-[8px] bg-[#F6FAFE] items-center justify-center relative">
              {!image && !imageUrl && !isUploading && (
                <>
                  <LiaCloudUploadAltSolid size={80} />
                  <p className="text-[#3399DB] text-[10px] font-[500] italic">
                    Drop your file here or browse.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </>
              )}

              {/* Show the image preview if available */}
              {(image || imageUrl) && !isUploading && (
                <div className="relative w-[150px] h-[108px] border border-[#AEAEAE] flex items-center">
                  <Image
                    src={imageUrl}
                    alt="preview"
                    layout="responsive"
                    width={150}
                    height={118}
                    className="z-10 rounded-[8px] object-fill"
                  />
                  <button
                    onClick={deleteImage}
                    className="absolute top-[-28px] right-[-3px] border flex items-center justify-center rounded-full bg-[#FFF1F1] h-[17px] w-[17px] z-50"
                  >
                    <span className="text-[#FF0004] text-[9px]">X</span>
                  </button>
                </div>
              )}

              {/* Show loading spinner while uploading */}
              {isUploading && (
                <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center bg-[#F0F0F0] opacity-75 z-50">
                  <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 w-10 h-10"></div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <button
              type="button"
              onClick={handleSubmit} // Use handleSubmit here
              className="inline-block bg-[#FF5A5F] hover:bg-[#ce565a] text-white py-2 px-4 rounded-md transition duration-300"
              disabled={isUploading} // Disable upload button while uploading
            >
              {isUploading ? "Uploading..." : "Upload"}
            </button>

            <Button
              onClick={saveImage}
              className="inline-block bg-[#FF5A5F] hover:bg-[#ce565a] text-white py-2 px-4 rounded-md transition duration-300"
              disabled={isUploading} // Disable save button while uploading
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
