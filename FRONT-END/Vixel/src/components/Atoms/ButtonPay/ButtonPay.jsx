import { Link } from "react-router-dom";

export default function ButtonPay ({linkTo, pageName}){
    return(
        <Link to={linkTo} className="btn btn-primary play-now-button big-button">
            <button >{pageName}</button>
        </Link>
    );
}