import { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import VideoPlayer from "./components/VideoPlayer";

import videoData from "./assets/data/videos.json";
import videoDetailsData from "./assets/data/video-details.json";

function App() {
    // Holds the brief vid data, for the vid list
    const [videoListArr, setVideoListArr] = useState(videoData);

    // State: The currently selected video
    const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

    // Handler function to setSelectedVideo to match the video of the passed in id
    // Will be used as handler when videolist item is clicked
    function videoListClickHandler(videoID) {
        let matchingVid = videoDetailsData.find((element) => {
            return element.id === videoID;
        });

        setSelectedVideo(matchingVid);
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
