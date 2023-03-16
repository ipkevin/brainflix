import {useState} from 'react'; // for react form style

import Comment from "../Comment/Comment";
import mohanPhoto from "../../assets/images/Mohan-muruge.jpg";

import "./CommentsArea.scss";

// expects props to have a selectedVideo object in it
export default function CommentsArea({selectedVideo, postComment, deleteComment}) {
    // postComment is a handler function from parent for posting comment to api and refreshing selectedVideo

    const [ commentVal, setCommentVal ] = useState("");

    const handleCommentChange = (event) => {
        setCommentVal(event.target.value);
    }

    // validates form input
    const isValid = () => {
        if (commentVal === "" || commentVal.length < 5){
            return false;
        } else {
            return true;
        }
    };

    function validateAndPost(event, postCommentFxn){
        event.preventDefault();
        if (isValid()) {
            postCommentFxn(event,selectedVideo.id);
            setCommentVal("");
        }
    }

    // This form uses the isValid function to check in realtime whether input is valid
    // Also, the ternary operators check if input is greater than 0 so that the warning messages do not appear until a user has typed something
    return (
        <section className="comments">
            <h2 className="comments__count">{selectedVideo.comments.length} comments</h2>
            <div className="comments__wrapper comments__wrapper-form">
                <img className="comments__image comments__image--form" alt="profile photo" src={mohanPhoto} />
                <div className="comments__content">
                    <p className="comments__form-subtitle">
                    {(!isValid() && commentVal.length > 0) ? <span className="comments__error-msg">Minimum of 5 characters please</span> : "Join the conversation"}
                    </p>
                    <form className="comments__form-wrapper" onSubmit={(event) => {validateAndPost(event, postComment)}}>
                        <textarea className={`comments__text-field ${(!isValid() && commentVal.length > 0) ? "comments__text-field--error" : ""}`} id="commentinput" name="commentinput" placeholder="Add a new comment" onChange={handleCommentChange} value={commentVal}></textarea>
                        <button className="comments__button button" disabled={!isValid()}>Comment</button>
                    </form>
                </div>
            </div>
            <ul className="comments__list">
                {selectedVideo.comments.sort( (a,b) => { return b.timestamp - a.timestamp }).map((element) => {
                    return <Comment commentData={element} key={element.id} deleteComment={deleteComment} selectedVideo={selectedVideo} />;
                })}
            </ul>
        </section>
        );
}
