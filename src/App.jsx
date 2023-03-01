
import './App.scss';
import logo from './assets/logo/BrainFlix-logo.svg';
import mohanPhoto from './assets/images/Mohan-muruge.jpg';
import blankPhoto from "./assets/images/profile-blank.png";
import uploadIcon from './assets/icons/upload.svg';
import searchIcon from './assets/icons/search.svg';
import likesIcon from './assets/icons/likes.svg';
import viewsIcon from './assets/icons/views.svg';

function App() {
  return (
    <>
      <header className='header'>
        <div className="header__logo-wrapper"><img className="header__logo" src={logo} alt='Brainflix logo' /></div>
        <input className="header__search" type="text" name="headerSearch" id="headerSearch" placeholder="Search"></input>
        <img className="header__user-image" src={mohanPhoto} alt='user photo' />
        <button className="header__button button">Upload
          <img className="header__button-icon" src={uploadIcon} />
        </button>
      </header>
      <section className="video">
        <video className="video__player" controls poster="https://placekitten.com/1920/1080" src="https://project-2-api.herokuapp.com/stream?api_key=neocat">blah</video>
      </section>
      <div className="flex-wrapper">
        <main>
          <article className="description">
            <h1 className="description__title">BMX Rampage: 2021 Highlights</h1>
            <section className="description__credits">
              <p className="description__author">By Red Crow</p>
              <p className="description__views"><img className="description__views-icon" src={viewsIcon} alt="view icon" />1,001,023</p>
              <p className="description__date">07/11/2021</p>
              <p className="description__likes"><img className="description__likes-icon" src={likesIcon} alt="Likes icon" />110,895</p>
            </section>
            <p className="description__body">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
          </article>

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
              <li className="comments__wrapper">
                <img className="comments__image" alt="profile photo" src="" />
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
              <li className="comments__wrapper">
                <img className="comments__image" alt="profile photo" src="" />
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

            </ul>
          </section>
        </main>
        <aside className="videoList">
          <p className="videoList__subtitle">Next Videos</p>
          <ul className="videoList__wrapper">
            <li className="videoList__item">
              <img className="videoList__thumb" src={'https://i.imgur.com/5qyCZrD.jpg'} />
              <div className="videoList__copy">
                <p className="videoList__videotitle">Become A Travel Pro In One Easy Lesson</p>
                <p className="videoList__author">Joe Bob Briggs</p>
              </div>
            </li>
            <li className="videoList__item">
              <img className="videoList__thumb" src={'https://i.imgur.com/5qyCZrD.jpg'} />
              <div className="videoList__copy">
                <p className="videoList__videotitle">Become A Travel Pro In One Easy Lesson</p>
                <p className="videoList__author">Joe Bob Briggs</p>
              </div>
            </li>
            <li className="videoList__item">
              <img className="videoList__thumb" src={'https://i.imgur.com/5qyCZrD.jpg'} />
              <div className="videoList__copy">
                <p className="videoList__videotitle">Become A Travel Pro In One Easy Lesson</p>
                <p className="videoList__author">Joe Bob Briggs</p>
              </div>
            </li>
            <li className="videoList__item">
              <img className="videoList__thumb" src={'https://i.imgur.com/5qyCZrD.jpg'} />
              <div className="videoList__copy">
                <p className="videoList__videotitle">Become A Travel Pr</p>
                <p className="videoList__author">Joe Bob Briggs</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </>



  );
}

export default App;
