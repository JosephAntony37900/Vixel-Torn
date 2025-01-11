import React from "react";
import './SocialOption.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialOption ({hreferencia, logoContact}){
    return(<li>
        <a href={hreferencia} class="social-link">
          <FontAwesomeIcon icon={logoContact}/>
        </a>
      </li>);
}