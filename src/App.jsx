import {useState} from 'react';
import './App.scss';

import Header from './components/Header';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import VideoPlayer from './components/VideoPlayer';

import videoData from './assets/data/videos.json';
import videoDetailsData from './assets/data/video-details.json';

function App() {
  
  // create state holding all of the brief vid data, for the vid list
  const [videoListArr, setVideoListArr] = useState(videoData);

  // the currently selected video
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  function videoListClickHandler() {
    //
  }

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="flex-wrapper">
        <VideoDetails selectedVideo={selectedVideo} />
        <VideoList videoListArr={videoListArr} selectedVideo={selectedVideo} videoListClickHandler={videoListClickHandler} />
      </div>
    </>
  );
}

export default App;
