import blankPhoto from "../assets/images/profile-blank.png";
import "./Comment.scss";

// Converts timestamp to a "x sec/min/hour/days ago" string & returns it
const convertDate = function(dateIn){
    let currDate = new Date();
    let commDate = new Date(dateIn);
    const elapsed = currDate - commDate;
    console.log(elapsed);
    const oneSec = 1000;
    const oneMin = 60*oneSec;
    const oneHour = 60*oneMin;
    const oneDay = 24*oneHour;

    if (elapsed < oneMin) {
        return `${Math.floor(elapsed/oneSec)} seconds ago`;
    } else if (elapsed < oneHour) {
        return `${Math.floor(elapsed/oneMin)} minutes ago`;
    } else if (elapsed < oneDay) {
        return `${Math.floor(elapsed/oneHour)} hours ago`;
    } else {
        return `${Math.floor(elapsed/oneDay)} days ago`;
    }
}

export default function Comment(props) {
    return (
        <li className="comments__wrapper">
        <img className="comments__image" alt="profile photo" src={blankPhoto} />
        <div className="comments__content">
        <div className="comments__meta">
            <p className="comments__author">{props.commentData.name}</p>
            {/* <p className="comments__date">{new Date(props.commentData.timestamp).toLocaleDateString()}</p> */}
            <p className="comments__date">{convertDate(props.commentData.timestamp)}</p>
        </div>
        <p className="comments__text">{props.commentData.comment}</p>
        </div>
        </li>
    )
}