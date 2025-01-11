import React from "react";
import "./ListPages.css";
import NavbarOptions from "@/components/Atoms/NavbarOptions/NavbarOptions";

export default function ListPages (){
    return(
        <nav>
            <ul className="another-navbar">
                <NavbarOptions hreferencia={"/home"} pageName={"Inicio"}/>
                <NavbarOptions hreferencia={"/games"} pageName={"Juegos"}/>
                <NavbarOptions hreferencia={"/tournaments"} pageName={"Torneos"}/>
                <NavbarOptions hreferencia={"/streams"} pageName={"Streams"}/>
                <NavbarOptions hreferencia={"/addStream"} pageName={"Transmitir"}/>
            </ul>
        </nav>
    )
}