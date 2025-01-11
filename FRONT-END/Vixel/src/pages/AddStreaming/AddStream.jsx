import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./AddStream.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import AddStreamForm from "@/components/Plantillas/AddStreamForm/AddStreamForm";
import { useNavigate } from "react-router-dom";

export default function AddStream() {
    const navigate = useNavigate();

    const handleStreamCreated = (streamData) => {
        localStorage.setItem('currentStream', JSON.stringify(streamData));
        navigate("/watchStream");
    };

    return (
        <main>
            <HeaderPage/>
            <div className="big-content-add-streams">
                <h2 className="justify-this-content2">Crear Stream </h2> 
                <AddStreamForm onStreamCreated={handleStreamCreated} />
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}
