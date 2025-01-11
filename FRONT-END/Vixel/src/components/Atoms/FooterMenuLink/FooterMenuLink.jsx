import React from "react";
import './FooterMenuLink.css';

export default function FooterMenuLink ({hreferencia, aPartOfThePage}){
    return(
        <li>
            <a href={hreferencia} class="footer-menu-link">{aPartOfThePage}</a>
        </li>
    );
}