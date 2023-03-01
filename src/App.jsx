
import './App.scss';

import Header from './components/Header';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <div className="flex-wrapper">
        <VideoDetails />
        <VideoList />
      </div>
    </>
  );
}

export default App;
