import React from "react";
import './CardAward.css'

export default function CardAward ({cardPhoto}){
    return(
        <li>
            <div class="winner-card">

                <figure class="card-banner">
                      <img src={cardPhoto} alt="Winner image"/>
                </figure>

                <h3 class="h5 card-title">1er lugar</h3>

            </div>
        </li>
    );
}