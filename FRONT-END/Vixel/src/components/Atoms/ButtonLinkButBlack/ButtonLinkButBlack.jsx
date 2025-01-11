import { Link } from "react-router-dom";
import "./ButtonLinkButBlack.css"

export default function ButtonLinkButBlack ({linkTo, pageName}){
    return(
        <Link to={linkTo} className="btn btn-primary-black play-now-button big-button">
            <button>{pageName}</button>
        </Link>
    );
}