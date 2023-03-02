import blankPhoto from "../assets/images/profile-blank.png";
import "./Comment.scss";

export default function Comment(props) {
    return (
        <li className="comments__wrapper">
        <img className="comments__image" alt="profile photo" src={blankPhoto} />
        <div className="comments__content">
        <div className="comments__meta">
            <p className="comments__author">{props.commentData.name}</p>
            <p className="comments__date">{new Date(props.commentData.timestamp).toLocaleDateString()}</p>
        </div>
        <p className="comments__text">{props.commentData.comment}</p>
        </div>
        </li>
    )
}