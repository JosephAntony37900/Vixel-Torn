import React from "react";
import './AboutButtom.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutButtom (){
    return (
        <button class="about-bottom-text">
            

            <span><FontAwesomeIcon icon={faCircleArrowRight}/> Registrate y juega!</span>    
        </button>
    );
}