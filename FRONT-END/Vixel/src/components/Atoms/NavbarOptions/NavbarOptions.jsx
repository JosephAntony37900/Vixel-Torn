import React from "react";
import { Link } from "react-router-dom";

export default function NavbarOptions ({hreferencia, pageName}){
    return(
        <li>
            <Link to={hreferencia} className="navbar-link">{pageName}</Link>
        </li>
    );
}