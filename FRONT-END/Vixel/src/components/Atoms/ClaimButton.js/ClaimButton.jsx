import "./ClaimButton.css";

export default function ClaimButton ({functionOnClick}){
    return(
        <button className="claim-button" onClick={functionOnClick}>
            Reclamar
        </button>
    )
}