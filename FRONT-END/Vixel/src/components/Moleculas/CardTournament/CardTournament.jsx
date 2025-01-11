import React from "react";
import "./CardTournament.css";
import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";
import { useNavigate } from "react-router-dom";

export default function CardTournament ({infoTournament}){

    const navigate = useNavigate();

    const navigateAndSend = () => {
        navigate('/JoinInATournament', {state: infoTournament})
    }

    return(
        <main className="container-card-tournament">
            <div className="content-img-card-tournament">
                <img src={infoTournament.srcPhoto}/>
            </div>
            <div className="content-info-card-tournament">
                <h4>{infoTournament.title}</h4>
                <h6>{infoTournament.game}</h6>
                <p>{infoTournament.description}</p>
                <ButtonWhitFunction action={"Unirse"} functionOnClick={navigateAndSend}/>
            </div>
        </main>
    )
}