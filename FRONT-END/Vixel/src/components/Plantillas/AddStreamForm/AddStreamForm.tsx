import React, { useState } from "react";
import "./AddStreamForm.css";
import ImageUpload from "@/components/Atoms/ImageUpload/ImageUplodad";

export default function AddStreamForm({ onStreamCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState(null);

    const handleImageUpload = (imageUrl) => {
        setCoverImage(imageUrl);
    };

    const handleSubmit = () => {
        const streamData = {
            title,
            description,
            coverImage,
        };
        onStreamCreated(streamData);
    };

    return (
        <main className="add-streams-form-body">
            <div className="add-streams-from-camps">
                <h1>Titulo</h1>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titulo de tu stream"
                />
            </div>
            <div className="add-streams-from-camps">
                <h1>Descripción</h1>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción de lo que trata el stream"
                />
            </div>
            <div className="add-streams-from-camps">
                <h1>Imagen de portada para el Stream</h1>
                <ImageUpload onImageUpload={handleImageUpload} />
                {coverImage && <img src={coverImage} alt="Imagen de portada" className="cover-image-preview" />}
            </div>
            <button className="start-button" onClick={handleSubmit}>
                Iniciar Stream
            </button>
        </main>
    );
}
