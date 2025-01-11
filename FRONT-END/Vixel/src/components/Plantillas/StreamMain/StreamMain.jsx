import React, { useEffect, useState } from "react";
import "./StreamMain.css";
import { useNavigate } from "react-router-dom";

export default function StreamMain() {
    const [liveStreams, setLiveStreams] = useState([]);
    const [recordedStreams, setRecordedStreams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar transmisiones grabadas desde localStorage
        const recordedVideos = JSON.parse(localStorage.getItem('recordedVideos')) || [];
        setRecordedStreams(recordedVideos);

        // Simular transmisión en vivo (puedes reemplazarlo con tu lógica real)
        const liveStream = JSON.parse(localStorage.getItem('currentStream')) || null;
        if (liveStream) {
            setLiveStreams([liveStream]);
        }
    }, []);

    const handleWatchLiveStream = (stream) => {
        localStorage.setItem('currentStream', JSON.stringify(stream));
        navigate("/watchStreamer");
    };

    const handleWatchRecordedStream = (stream) => {
        localStorage.setItem('selectedRecordedStream', JSON.stringify(stream));
        navigate("/watchStreamer");
    };

    return (
        <main className="body-streams-section">
            <div className="section">
                <h2>Transmisiones en Vivo</h2>
                {liveStreams.length > 0 ? (
                    <div className="content-streams">
                        {liveStreams.map((stream, index) => (
                            <div key={index} className="stream-card" onClick={() => handleWatchLiveStream(stream)}>
                                <img src={stream.coverImage} alt="Portada del Stream" />
                                <div className="stream-info">
                                    <h3>{stream.title}</h3>
                                    <p>{stream.nameStreamer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No hay transmisiones en vivo actualmente.</p>
                )}
            </div>
            <div className="section">
                <h2>Transmisiones Grabadas</h2>
                {recordedStreams.length > 0 ? (
                    <div className="content-streams">
                        {recordedStreams.map((stream, index) => (
                            <div key={index} className="stream-card" onClick={() => handleWatchRecordedStream(stream)}>
                                <img src={stream.coverImage} alt="Portada del Stream" />
                                <div className="stream-info">
                                    <h3>{stream.title}</h3>
                                    <p>{stream.nameStreamer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No hay transmisiones grabadas disponibles.</p>
                )}
            </div>
        </main>
    );
}
