import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./DataTournament.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import DataTournamentInfo from "@/components/Plantillas/DataTournamentInfo/DataTournamentInfo";

export default function DataTournament (){
    return(
        <main>
            <HeaderPage/>
            <div>
                <DataTournamentInfo/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}