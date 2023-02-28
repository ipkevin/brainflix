
import './App.scss';
import logo from './assets/logo/BrainFlix-logo.svg';
import mohanPhoto from './assets/images/Mohan-muruge.jpg';
import uploadIcon from './assets/icons/upload.svg';
import searchIcon from './assets/icons/search.svg';

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
        <video class="video__player" controls poster="https://placekitten.com/1920/1080" src="https://project-2-api.herokuapp.com/stream?api_key=neocat">blah</video>
      </section>
      <div className="flex-wrapper">
        <main>
          <article className="description">
            <h1 className="description__title">BMX Rampage: 2021 Highlights</h1>
            <section className="description__credits">
              <p className="description__author">By Red Crow</p>
              <p className="description__views">1,001,023</p>
              <p className="description__date">07/11/2021</p>
              <p className="description__likes">110,895</p>
            </section>
            <p className="description__body">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
          </article>

        </main>
        <aside>

        </aside>
      </div>
    </>



  );
}

export default App;
