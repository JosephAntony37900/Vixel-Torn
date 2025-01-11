import React, { useState } from 'react';
import './ImageUplodad.css';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);

  const onFileSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImagePreview(URL.createObjectURL(file));

      // Subir a Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "VixelCompany");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dtlrxc5um/image/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Cloudinary upload error: ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        onImageUpload(data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        id="file-input"
        className="file-input"
        onChange={onFileSelected}
        multiple
      />
      <label htmlFor="file-input" className="file-label">
        {selectedImagePreview ? (
          <img src={selectedImagePreview} alt="Imagen seleccionada" className="image-preview" />
        ) : (
          <span>+</span>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
