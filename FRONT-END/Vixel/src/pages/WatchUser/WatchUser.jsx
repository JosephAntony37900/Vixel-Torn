import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./WatchUser.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import WatchUserStream from "@/components/Plantillas/WatchUserStream/WatchUserStream";

export default function WatchUser(){
    return(
        <main>
            <HeaderPage/>
            <div className="big-content-add-watch-user">
                <h2 className="justify-this-content4">Viendo Stream </h2> 
                <WatchUserStream/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}
