import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import VideoList from '../components/VideoList';

import videoData from "../assets/data/videos.json";
import videoDetailsData from "../assets/data/video-details.json";

import axios from 'axios';

export const apiKey = "7a59e70e-642c-4381-9207-b623e94cff56";
export const apiUrl = "https://project-2-api.herokuapp.com";



function HomePage(){
    
    
    // Holds the brief vid data, for the vid list
    const [videoListArr, setVideoListArr] = useState([]);

    // State: The currently selected video
    const [selectedVideo, setSelectedVideo] = useState({});

    const { videoId } = useParams();

    useEffect(() => {
        getAllVideos(apiKey);
    }, []);

    /*
    * set a seoncd useEffect()
    * if jokeid exists (from useParams) then get joke with th id
    * else if jokelist.length then get joke with jokelist[0]
    *   need to check jokelist.length cuz on 1st render there is no jokelist set until after the render sometime 
    * depdencies on joke id and jokelist, but joke id is not a state.  It's an url param.
    * by setting jokelist as a depedendncy, then once initial pull of jokelist completes, this useeffect will run again.
    * 
    * You can also set a conditional render in the rendering component area to check if selectedvideo is nonempty before rendering
    * 
    */

    // Sets the selectedVideo assuming joke ID or videoListArr are non-empty 
    useEffect(() => {
        if (videoId) {
            getVideo(videoId);
        } else if (videoListArr.length > 0) {
            getVideo(videoListArr[0].id);
        }
    }, [videoId, videoListArr])


    function getAllVideos(apiKey) {
        let theRequest = apiUrl+"/videos?api_key="+apiKey;
        axios.get(theRequest).then( (result) => {
            setVideoListArr(result.data);
        }).catch( (err) => {
            console.log("videolist fetch error: ", err);
        })
    }

    function getVideo(videoId){
        let theRequest = apiUrl+"/videos/"+videoId+"?api_key="+apiKey;
        axios.get(theRequest).then( (result) => {
            setSelectedVideo(result.data);
            console.log("here is the result video: ", result.data);
        }).catch((err) => {
            console.log("video fetch error: ", err);
        })
    }

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
            {Object.keys(selectedVideo).length !== 0 && <VideoPlayer selectedVideo={selectedVideo} />}
            {/* <VideoPlayer selectedVideo={selectedVideo} /> */}
            <div className="flex-wrapper">
            {Object.keys(selectedVideo).length !== 0 && <VideoDetails selectedVideo={selectedVideo} />}
            {/* Either you check for empty here or in the components.  Prob better here. */}
            {/* <VideoDetails selectedVideo={selectedVideo} /> */}
                <VideoList videoListArr={videoListArr} selectedVideo={selectedVideo} videoListClickHandler={videoListClickHandler} />
            </div>
        </>
    );

}

export default HomePage;