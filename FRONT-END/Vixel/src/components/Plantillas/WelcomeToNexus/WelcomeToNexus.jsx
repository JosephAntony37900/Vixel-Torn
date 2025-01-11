import React from "react";
import './WelcomeToNexus.css'
import RegistrerButton from "../../Atoms/RegistrerButton/RegistrerButton";
import Logo from '../../../icons/logito.png'
import { ClassNames } from "@emotion/react";

export default function WelcomeToNexus (){
    return(
    <section class="hero" id="hero">
        <div class="container">

          <p class="hero-subtitle">Bienvenidos a</p>
          <div className="vixel-name-logo">
            {/*< img className="logoo" src={Logo} />*/}
            <h4>VIXEL</h4>
          </div>
          {/*<h1 class="hero-title">VIXEL (Aquí debería ir el logo)</h1>*/}

          <div class="btn-group">

            <RegistrerButton/>
            <button class="btn btn-link" >Torneos</button>

          </div>

        </div>
    </section>
    );
}