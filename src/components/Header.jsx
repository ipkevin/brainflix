import logo from "../assets/logo/BrainFlix-logo.svg";
import mohanPhoto from "../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../assets/icons/upload.svg";

import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <img className="header__logo" src={logo} alt="Brainflix logo" />
            </div>
            <input className="header__search" type="text" name="headerSearch" id="headerSearch" placeholder="Search"></input>
            <img className="header__user-image" src={mohanPhoto} alt="user photo" />
            <button className="header__button button">
                Upload
                <img className="header__button-icon" src={uploadIcon} />
            </button>
        </header>
    );
}
