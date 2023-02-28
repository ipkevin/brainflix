import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <header className='header'>
        <img src='./assets/logo/BrainFlix-logo.svg' alt='Brainflix logo' />
        <input className="header__search" name="headerSearch" id="headerSearch" placeholder="search"></input>
        <img src='./assets/images/Mohan-muruge.jpg' alt='user photo' />
        <button className="header__button button">Upload</button>
      </header>
    </>



  );
}

export default App;
