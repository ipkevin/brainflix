import {Link} from "react-router-dom";
import logo from "../assets/logo/BrainFlix-logo.svg";
import mohanPhoto from "../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <Link className="header__logo-link" to="/">
                    <img className="header__logo" src={logo} alt="Brainflix logo" />
                </Link>
            </div>
            <input className="header__search" type="text" name="headerSearch" id="headerSearch" placeholder="Search"></input>
            <img className="header__user-image" src={mohanPhoto} alt="user photo" />
            <Link to="/upload" className="header__button button">Upload</Link>
        </header>
    );
}
