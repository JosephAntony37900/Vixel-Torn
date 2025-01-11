import React from "react";
import './TeammatesIcons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function TeammatesIcons ({imgMember}){
    <li>
        <a href="#" class="team-member">
            <figure>
                <img src={imgMember} alt="Team member image"/>
            </figure>

            <FontAwesomeIcon icon={faLink}/>
        </a>
    </li>
}