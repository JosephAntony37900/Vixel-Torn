import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./Stream.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import StreamMain from "@/components/Plantillas/StreamMain/StreamMain";

export default function Stream() {
    return (
        <main>
            <HeaderPage/>
            <div>
                <StreamMain/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}
