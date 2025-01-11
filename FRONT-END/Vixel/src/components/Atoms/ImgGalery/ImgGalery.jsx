import React from "react";
import './ImgGalery.css'

export default function ImgGalery ({imgGalery}){
    return(
        <li>
            <figure class="gallery-item">
                <img src={imgGalery} alt="Gallery image"/>
            </figure>
        </li>
    );
}