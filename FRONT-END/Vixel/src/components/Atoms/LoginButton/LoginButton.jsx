import React from "react";
import "./LoginButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoginButton () {
    return(
        <button class="btn-sign_in">
            <div class="icon-box">
          </div>
          <FontAwesomeIcon icon={faRightToBracket} />
          <span>Log-in</span>
        </button>
    );
}