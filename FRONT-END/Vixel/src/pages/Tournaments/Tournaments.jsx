import React from "react";
import "./Tournaments.css";
import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import MainTournaments from "@/components/Plantillas/MainTournaments/MainTournaments";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";

export default function Tournaments (){
    return(
        <main>
            <HeaderPage/>
            <div>
                <MainTournaments/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}