export async function uploadImage(imageFile: File): Promise<string> {
  console.log('Uploading image:', imageFile.name);
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!); // Replace with your upload preset

  try {
    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET)

    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });


    
    if (!response.ok) {
      const data = await response.json();
      console.error('Failed to upload image:', data.error.message);
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    console.log('Upload successful. Image URL:', data.secure_url);
    return data.secure_url; // Return the image URL
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}
