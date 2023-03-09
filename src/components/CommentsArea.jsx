import Comment from "./Comment";
import mohanPhoto from "../assets/images/Mohan-muruge.jpg";

import "./CommentsArea.scss";

// expects props to have a selectedVideo object in it
export default function CommentsArea({selectedVideo, postComment, deleteComment}) {
    // postComment is a handler function from parent for posting comment to api and refreshing selectedVideo

    // Function to validate input from form. Highlight fields that have a problem.
    // If form fields are all valid, then post to API and update site. Alert use of error otherwise.
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
    }

    return (
        <section className="comments">
            <h2 className="comments__count">{selectedVideo.comments.length} comments</h2>
            <div className="comments__wrapper comments__wrapper-form">
                <img className="comments__image comments__image--form" alt="profile photo" src={mohanPhoto} />
                <div className="comments__content">
                    <p className="comments__form-subtitle">Join the conversation</p>
                    <form className="comments__form-wrapper" onSubmit={(event) => {validateAndPost(event, postComment)}}>
                        <textarea className="comments__text-field" id="commentinput" name="commentinput" placeholder="Add a new comment"></textarea>
                        <button className="comments__button button">Comment</button>
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
