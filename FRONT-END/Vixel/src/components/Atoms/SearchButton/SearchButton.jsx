import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './SearchButton.css'

export default function SearchButton (){
    return(
        <button class="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    );
}