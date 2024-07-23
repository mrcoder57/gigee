"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { uploadImage } from "@/middleware/cloudinary";
import { toast } from "sonner"

interface UploadComponentProps {
  onImageUpload: (url: string) => void;
}

const UploadComponent: React.FC<UploadComponentProps> = ({ onImageUpload }) => {
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
        toast.success("image upload successfully")
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700"
          >
            Choose an image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
    </div>
  );
};

export default UploadComponent;
