import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./Qualifying.css"
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import QualifyingMain from "@/components/Plantillas/QualifyingMain/QualifyingMain";

export default function Qualifying (){
    return (
        <main>
            <HeaderPage/>
            <div>
                <QualifyingMain/> 
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}