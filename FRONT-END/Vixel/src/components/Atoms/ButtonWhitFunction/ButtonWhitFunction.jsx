import React from "react";

export default function ButtonWhitFunction ({functionOnClick, action}){
    return(
        <button className="btn btn-primary play-now-button big-button" 
        onClick={functionOnClick}
        >{action}</button>
    )
}