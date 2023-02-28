
import './App.scss';
import logo from './assets/logo/BrainFlix-logo.svg';
import mohanPhoto from './assets/images/Mohan-muruge.jpg';
import uploadIcon from './assets/icons/upload.svg';

function App() {
  return (
    <>
      <header className='header'>
        <div className="header__logo-wrapper"><img className="header__logo" src={logo} alt='Brainflix logo' /></div>
        <input className="header__search" name="headerSearch" id="headerSearch" placeholder="Search"></input>
        <img className="header__user-image" src={mohanPhoto} alt='user photo' />
        <button className="header__button button">Upload
          <img className="header__button-icon" src={uploadIcon} />
        </button>
      </header>
      <section className="video">
        <video class="video__player">blah</video>
      </section>
    </>



  );
}

export default App;
