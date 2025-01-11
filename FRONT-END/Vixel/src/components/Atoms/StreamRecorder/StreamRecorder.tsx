import React, { useRef, useState } from "react";
import "./StreamRecorder.css";

export default function StreamRecorder({ onStreamCreated }) {
    const [isStreaming, setIsStreaming] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);

    const startStream = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
        setIsStreaming(true);
        recordedChunksRef.current = []; // Reset recorded chunks

        // Configure MediaRecorder
        const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunksRef.current.push(event.data);
            }
        };
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
    };

    const stopStream = async () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();

            // Stop media tracks
            const stream = videoRef.current?.srcObject as MediaStream;
            stream.getTracks().forEach((track) => track.stop());
            setIsStreaming(false);

            // Wait for the MediaRecorder to fully stop
            await new Promise((resolve) => {
                mediaRecorderRef.current?.addEventListener('stop', resolve);
            });

            if (recordedChunksRef.current.length === 0) {
                console.error("No hay datos grabados.");
                return;
            }

            const videoBlob = new Blob(recordedChunksRef.current, { type: "video/webm" });

            // Upload to Cloudinary
            const formData = new FormData();
            formData.append("file", videoBlob);
            formData.append("upload_preset", "VixelCompany");

            try {
                const response = await fetch("https://api.cloudinary.com/v1_1/dtlrxc5um/video/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Cloudinary upload error: ${response.statusText} - ${errorText}`);
                }

                const data = await response.json();
                const cloudinaryUrl = data.secure_url;

                onStreamCreated(cloudinaryUrl);
            } catch (error) {
                console.error("Error uploading video to Cloudinary:", error);
            }
        }
    };

    return (
        <div className="video-stream">
            <video ref={videoRef} className="video-preview" muted />
            {!isStreaming ? (
                <button className="start-button" onClick={startStream}>
                    Iniciar Transmisión
                </button>
            ) : (
                <button className="stop-button" onClick={stopStream}>
                    Detener y Guardar
                </button>
            )}
        </div>
    );
}
