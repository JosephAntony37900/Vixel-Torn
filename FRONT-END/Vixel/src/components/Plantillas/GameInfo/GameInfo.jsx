import React from "react";
import "./GameInfo.css";
import CardGame from "@/components/Moleculas/CardGame/CardGame";
import WhaleXpaceImg from "../../../img/WhaleXpace-caratula.jpg";
import CoinDrifters from "../../../img/CoinersDrifter-caratula.jpg";
import Cheemsscape from "../../../img/CheemsCape.png"

export default function GameInfo (){

    const objExample = {
        srcImg : Cheemsscape,
        titleCard: "ChemScape",
        content: "ChemScape es un juego descentralizado avientado en 8 bits, que buscar ser recrear la experiencia de usuario de los 80/90, con un interfaz amigable, usando las mejores practicas de programación y capaz de ganar diferentes premios dentro de el.",
        link: "https://anabelenscript.github.io/CheemScape/"
    }

    const WhaleXpaceInfo = {
        srcImg: WhaleXpaceImg,
        titleCard: "WhaleXPace",
        content: "WhaleXPace es un juego clicker, donde controlaremos a Phynix, una ballena que se lanza al espacio a explorar, evita los obstáculos, sobrevive las profundidades del espacio y consigue la gloria en este juego sencillo pero divertido.",
        link: "https://anabelenscript.github.io/WhaleXpace/"
    }

    const CoinDriftersInfo = {
        srcImg : CoinDrifters,
        titleCard: "Coin Drifters",
        content: "Domina las calles y carreteras en Coin drifter, donde tomarás el contro de un veloz auto, cruza los largos desiertos en este extraordinario juego de conducción en 2d, y vuélvete un maestro al volante.",
        link: "https://richiecast07.github.io/Coiners_Drift_Demo/"
    }

    return(
        <main className="content-gamecards">
            <CardGame gameObj={WhaleXpaceInfo}/>
            <CardGame gameObj={CoinDriftersInfo}/>
            <CardGame gameObj={objExample}/>
        </main>
    );
}