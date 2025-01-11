import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RegistrerButton.css"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function RegistrerButton (){
    return(
        <Link to={'/games'} class="btn btn-primary play-now-button">
            <span>Jugar ya!</span>

            <FontAwesomeIcon icon={faCirclePlay}/>
        </Link>
    );
}