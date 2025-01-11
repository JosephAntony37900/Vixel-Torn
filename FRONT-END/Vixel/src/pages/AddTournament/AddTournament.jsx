import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./AddTournament.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import AddTournamentForm from "@/components/Plantillas/AddTournamentForm/AddTournamentForm";


export default function AddTournament(){
    return(
        <main>
            <HeaderPage/>
            <div className="big-content-add-tournament">
                <h2 className="justify-this-content">Agregar torneo <FontAwesomeIcon icon={faTrophy}/></h2> 
                <AddTournamentForm/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}