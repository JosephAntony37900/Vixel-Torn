import React, { useEffect, useState, useRef } from 'react';
import './WatchStreamVideo.css';
import profilePicture from '../../img/team-member-5.png';

export default function WatchStreamVideo (){
    const [streamData, setStreamData] = useState(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('currentStream'));
        setStreamData(data);
    }, []);

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

                // Save the link to the list of recorded videos
                const recordedVideos = JSON.parse(localStorage.getItem('recordedVideos')) || [];
                const newRecordedStream = {
                    title: streamData.title,
                    description: streamData.description,
                    coverImage: streamData.coverImage,
                    videoUrl: cloudinaryUrl,
                    nameStreamer: "Streamercito" // Adjust this as needed
                };
                recordedVideos.push(newRecordedStream);
                localStorage.setItem('recordedVideos', JSON.stringify(recordedVideos));
                
                // Remove current stream
                localStorage.removeItem('currentStream');
                setStreamData(null);
            } catch (error) {
                console.error("Error uploading video to Cloudinary:", error);
            }
        }
    };

    if (!streamData) {
        return <div>No hay stream disponible.</div>;
    }

    return (
        <main className='container-stream'>
            <div className="user">
                <div className="profileAndName">
                    <img src={profilePicture} alt="Profile" />
                    <span>Streamercito</span>
                </div>
                <button className='follow'>Seguir</button>
            </div>
            <div className="container-add-watch-form-body">
                <div className="add-watch-form-body">
                    
                    <video ref={videoRef} className="video-preview" muted />
                </div>
                
            </div>
            {!isStreaming ? (
                    <button className="start-button" onClick={startStream}>
                        Iniciar Transmisión
                    </button>
                ) : (
                    <button className="stop-button" onClick={stopStream}>
                        Detener y Guardar
                    </button>
                )}
            <div className='letterSize'>
                <h1>{streamData.title}</h1>
                <h1>Descripción</h1>
            </div>
            <p id='descript'>{streamData.description}</p>
        </main>
    );
}
