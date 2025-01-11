import MisionRequest from "@/components/Moleculas/MisionRequest/MisionRequest";
import "./QuestBoard.css";

export default function QuestBoard ({frecuencyQuest, objQuest}){
    return(
        <main>
            <h3 className="center-this-tittle">Misiones {frecuencyQuest}</h3>
            <div>
                <MisionRequest/>
                <MisionRequest/>
                <MisionRequest/>
            </div>
        </main>
    )
}