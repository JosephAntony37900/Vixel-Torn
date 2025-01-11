import React from "react";
import './About.css'
import ImgAbout from '../../../img/about-img.png'
import ImgCharacter1 from '../../../img/character-1.png'
import ImgCharacter2 from '../../../img/character-2.png'
import ImgCharacter3 from '../../../img/character-3.png'
import AboutButtom from "../../Atoms/AboutButtom/AboutButtom";

export default function About (){
    return(
        <section class="about" id="about">
          <div class="about-container">
            
            <div className="about-content section-about">

              

              <h2 class="about-title">¿QUÉ ES <strong>VIXEL</strong>?</h2>

              <p class="about-text">
                VIXEL es una plataforma de vieojuegos pixelart y streams con tecnología Blockchain, hecho con
                VARA.
                We use smart contracts that ensure all tournament rules and reward distributions are executed automatically without human intervention. This reduces the risk of fraud and ensures that rules are applied uniformly.
              </p>
              
              <h2 class="about-title">¿QUÉ <strong>PROBLEMAS</strong> TRATAMOS DE <strong>SOLUCIONAR</strong>?</h2>

              <p class="about-text">
              We implement blockchain technology to ensure that all transactions and rewards are transparent and verifiable. Each transaction is recorded on the blockchain, allowing users to publicly verify the flow of rewards from the organizer to the winner.
              </p>
              
                <AboutButtom/>

            </div>

            <div className="section-about">

              <figure class="about-banner">

                <img src={ImgAbout} alt="M shape" class="about-img"/>

                

              </figure>
            </div>


          </div>
        </section>
    );
}

/*
<p class="about-subtitle">¿Qué tratamos de solucionar?</p>

//Estas imágenes irán detrás del logo, tiene que ser las de nuestros pjs
<img src={ImgCharacter1} alt="Game character" class="character character-1"/>

                <img src={ImgCharacter2} alt="Game character" class="character character-2"/>

                <img src={ImgCharacter3} alt="Game character" class="character character-3"/>
*/