import React from "react";
import './QuickLinkItem.css';

export default function QuickLinkItem ({hreferencia, pageToLink}) {
    return(
        <li>
            <a href={hreferencia} class="quicklink-item">{pageToLink}</a>
        </li>
    );
}