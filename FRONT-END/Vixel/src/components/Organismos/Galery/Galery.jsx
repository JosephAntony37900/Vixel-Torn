import React from "react";
import './Galery.css'
import ImgGalery1 from '../../../img/CoinersDrifter-caratula.jpg';
import ImgGalery2 from "../../../img/gallery-img-1.jpg";
import ImgGalery3 from '../../../img/gallery-img-2.jpg';
import ImgGalery4 from '../../../img/WhaleXpace-caratula.jpg';
import ImgGalery from "../../Atoms/ImgGalery/ImgGalery";

export default function Galery(){
    return(
        <section class="gallery">
          <div class="container">

            <ul class="gallery-list has-scrollbar">

                <ImgGalery imgGalery={ImgGalery1}/>
                <ImgGalery imgGalery={ImgGalery2}/>
                <ImgGalery imgGalery={ImgGalery3}/>
                <ImgGalery imgGalery={ImgGalery4}/>
            </ul>

          </div>
        </section>
    );
}