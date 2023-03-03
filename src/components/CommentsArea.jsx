import Comment from "./Comment";
import mohanPhoto from "../assets/images/Mohan-muruge.jpg";

import "./CommentsArea.scss";

// expects props to have a selectedVideo object in it
export default function CommentsArea(props) {
    return (
        <section className="comments">
            <p className="comments__count">{props.selectedVideo.comments.length} comments</p>
            <div className="comments__wrapper comments__wrapper-form">
                <img className="comments__image comments__image--form" alt="profile photo" src={mohanPhoto} />
                <div className="comments__content">
                    <p className="comments__form-subtitle">Join the conversation</p>
                    <form className="comments__form-wrapper" onSubmit={(event) => event.preventDefault()}>
                        <textarea className="comments__text-field" placeholder="Add a new comment"></textarea>
                        <button className="comments__button button">Comment</button>
                    </form>
                </div>
            </div>
            <ul className="comments__list">
                {props.selectedVideo.comments.map((element) => {
                    return <Comment commentData={element} key={element.id} />;
                })}
            </ul>
        </section>
    );
}
