import ClaimButton from "@/components/Atoms/ClaimButton.js/ClaimButton";
import "./MisionRequest.css"

export default function MisionRequest (){

    const questObj = {
        mision: "Conduce a toda velocidad, choca y mata a 5 abuelitas",
        reward: 75
    }

    return (
        <main className="content-quest">
            <p>{questObj.mision}</p>
            <div className="content-objects-request">
                <input value={"Reward" + questObj.reward + "pts."} disabled className="content-reward-request"/>
                <div><ClaimButton/></div>
            </div>
        </main>
    );
}