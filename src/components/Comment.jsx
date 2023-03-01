import blankPhoto from "../assets/images/profile-blank.png";
import "./Comment.scss";

export default function Comment() {
    return (
        <li className="comments__wrapper">
        <img className="comments__image" alt="profile photo" src={blankPhoto} />
        <div className="comments__content">
        <div className="comments__meta">
            <p className="comments__author">Michael Lyons</p>
            <p className="comments__date">11/10/2023</p>
        </div>
        <p className="comments__text">
            They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.
        </p>
        </div>
        </li>
    )
}