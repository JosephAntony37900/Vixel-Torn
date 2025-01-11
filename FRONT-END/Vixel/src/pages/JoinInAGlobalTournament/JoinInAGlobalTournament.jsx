import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./JoinInAGlobalTournament.css"
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import JoinInAGlobalTournamentMain from "@/components/Plantillas/JoinInAGlobalTournamentMain/JoinInAGlobalTournamentMain";

export default function JoinInAGlobalTournament (){
    return(
        <main>
            <HeaderPage/>
            <div>
                <JoinInAGlobalTournamentMain/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}