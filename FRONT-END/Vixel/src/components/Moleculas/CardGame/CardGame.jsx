import React from "react";
import "./CardGame.css"
import { Link } from "react-router-dom";
import ButtonLink from "@/components/Atoms/ButtonLink/ButtonLink";

export default function CardGame ({gameObj}){
    return(
        <main className="main-content">
        <Link to={gameObj.link} className="button">
            <div class = "card">
                <img src={gameObj.srcImg} alt=""/>
                <div class="card-content">
                    <h2>{gameObj.titleCard}</h2>
                    <p>
                        {gameObj.content}

                        Juega ahora!
                    </p>
                </div>
            </div>
        </Link>
</main>
    );
}