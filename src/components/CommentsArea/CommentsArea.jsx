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

    const isValid = () => {
        if (commentVal === "" || commentVal.length < 5){
            return false;
        } else {
            return true;
        }
    };

    function validateAndPost(event, postCommentFxn){
        event.preventDefault();
        let errorMsg = "";

        // Validate the message field
        if (event.target.commentinput.value === "" || event.target.commentinput.value.length < 4) {
            errorMsg += "- Add a message (min 4 characters please)\n";
            event.target.commentinput.classList.add("comments__text-field--error");
        } else {
            event.target.commentinput.classList.remove("comments__text-field--error");
        }

        // Alert user which fields have a problem, or post the comment if no problems
        if (errorMsg === "") {
            postCommentFxn(event, selectedVideo.id);
        } else {
            errorMsg = "There was a problem with your submission:\n\n"+errorMsg;
            alert(errorMsg);
        }
        setCommentVal("");
    }

    return (
        <section className="comments">
            <h2 className="comments__count">{selectedVideo.comments.length} comments</h2>
            <div className="comments__wrapper comments__wrapper-form">
                <img className="comments__image comments__image--form" alt="profile photo" src={mohanPhoto} />
                <div className="comments__content">
                    <p className="comments__form-subtitle">Join the conversation 
                    {(!isValid() && commentVal.length > 0) ? <span class="comments__error-msg">&nbsp;Minimum of 5 characters please</span> : ""}
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
