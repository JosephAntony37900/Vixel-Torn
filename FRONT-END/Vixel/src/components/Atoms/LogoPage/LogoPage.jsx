import React from "react";
import "./LogoPage.css";
import GameXLogo from '../../../icons/logito2.png';

export default function LogoPage (){
    return(
        <a href="#" className="logo">
          <img className="logito" src={GameXLogo} alt="GameX logo" />
        </a>
    );
}