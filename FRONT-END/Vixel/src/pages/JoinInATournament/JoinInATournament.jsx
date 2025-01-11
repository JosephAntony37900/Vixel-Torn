import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./JoinInATournament.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import JoinInATournamentMain from "@/components/Plantillas/JoinInATournamentMain/JoinInATournamentMain";
import { useLocation } from "react-router-dom";


export default function JoinInATournament (){

    const location = useLocation();

    const objTournament = location.state || {};

    if(objTournament == null)
        return(
            <p>Without data</p>
    );

    return(
        <main>
            <HeaderPage/>
            <div>
                <JoinInATournamentMain objTournament={objTournament}/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}