import React from "react";
import './FooterSocialLink.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSocialLink ({logoSocialLink}) {
    return(
        <li>
            <a href="#" class="footer-social-link">
                <FontAwesomeIcon icon={logoSocialLink}/>
            </a>
        </li>
    );
}