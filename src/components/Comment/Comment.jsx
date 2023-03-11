import blankPhoto from "../../assets/images/profile-blank.png";
import "./Comment.scss";

// Converts timestamp to a "x sec/min/hour/days ago" string & returns it
const convertDate = function (dateIn) {
    let currDate = new Date();
    let commDate = new Date(dateIn);
    const elapsed = currDate - commDate; // just posted comments show -1 second, so this accounts for that
    const oneSec = 1000;
    const oneMin = 60 * oneSec;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;

    if (elapsed < oneMin) {
        return `${ (Math.floor(elapsed / oneSec)) >= 0 ? Math.floor(elapsed / oneSec) : 0} seconds ago`;
        // just posted comments sometimes return -1, so ternary used to display 0 instead
    } else if (elapsed < oneHour) {
        return `${Math.floor(elapsed / oneMin)} minutes ago`;
    } else if (elapsed < oneDay) {
        return `${Math.floor(elapsed / oneHour)} hours ago`;
    } else {
        return `${Math.floor(elapsed / oneDay)} days ago`;
    }
};

export default function Comment({selectedVideo, deleteComment, commentData}) {

    return (
        <li className="comments__wrapper">
            <img className="comments__image" alt="profile photo" src={blankPhoto} />
            <div className="comments__content">
                <div className="comments__meta">
                    <p className="comments__author">{commentData.name}</p>
                    <p className="comments__date">{convertDate(commentData.timestamp)}</p>
                </div>
                <p className="comments__text">{commentData.comment}</p>
                <button className="comments__deleteButton" id="deletebutton" onClick={(event) => deleteComment(event, selectedVideo.id, commentData.id)}>Delete</button>
            </div>
        </li>
    );
}
