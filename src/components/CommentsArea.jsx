import Comment from './Comment';
import mohanPhoto from '../assets/images/Mohan-muruge.jpg';

import './CommentsArea.scss';

export default function CommentsArea() {
    return (
        <section className="comments">
            <p className="comments__count">3 comments</p>
            <div className="comments__wrapper">
              <img className="comments__image comments__image--form" alt="profile photo" src={mohanPhoto} />
              <div className="comments__content">
                <p className="comments__form-subtitle">Join the conversation</p>
                <form className="comments__form-wrapper">
                  <textarea className="comments__text-field" placeholder="Add a new comment"></textarea>
                  <button className="comments__button button">Comment</button>
                </form>
              </div>
            </div>
            <ul className="comments__list">

            <Comment />
            <Comment />
            <Comment />

            </ul>
        </section>
    )   
}
