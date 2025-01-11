import React, { useEffect, useState, useRef } from 'react';
import './WatchUserStream.css';
import profilePicture from '../../../img/team-member-5.png';

export default function WatchUserStream (){
    const [streamData, setStreamData] = useState(null);
    const [isLiveStream, setIsLiveStream] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const currentStream = JSON.parse(localStorage.getItem('currentStream'));
        const recordedStream = JSON.parse(localStorage.getItem('selectedRecordedStream'));

        if (recordedStream) {
            setStreamData(recordedStream);
        } else if (currentStream) {
            setStreamData(currentStream);
            setIsLiveStream(true);
        }
    }, []);

    if (!streamData) {
        return <div>No hay stream disponible.</div>;
    }

    const startStream = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    };

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
                    {isLiveStream ? (
                        <video ref={videoRef} className="video-preview" autoPlay muted />
                    ) : (
                        <video ref={videoRef} className="video-preview" controls>
                            <source src={streamData.videoUrl} type="video/webm" />
                        </video>
                    )}
                </div>
            </div>
            Streaming
            <div className='letterSize'>
                <h1>{streamData.title}</h1>
                <h1>Descripción</h1>
            </div>
            <p id='descript'>{streamData.description}</p>
        </main>
    );
}
