import { useState } from "react";
import { supabase } from "../../../supabaseClient";

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    setUploading(true);

    const fileExt = image.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`; // Unique filename
    const filePath = `product_images/${fileName}`; // Change 'uploads' to your folder name in Supabase

    const { error } = await supabase.storage
      .from("products") // Change to your actual bucket name
      .upload(filePath, image);

    if (error) {
      console.error("Upload error:", error.message);
      alert("Error uploading image!");
    } else {
      const publicUrl = supabase.storage.from("your-bucket-name").getPublicUrl(filePath).data.publicUrl;

      // Call the function passed via props to save the image path
      if (onUpload) onUpload(publicUrl);
      
      alert("Image uploaded successfully!");
    }

    setUploading(false);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
};

export default UploadImage;
