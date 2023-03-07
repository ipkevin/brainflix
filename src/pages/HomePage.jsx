import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import VideoList from '../components/VideoList';

import axios from 'axios';

export const apiKey = "7a59e70e-642c-4381-9207-b623e94cff56";
export const apiUrl = "https://project-2-api.herokuapp.com";



function HomePage(){
    
    
    // Holds the brief vid data, for the vid list
    const [videoListArr, setVideoListArr] = useState([]);

    // State: The currently selected video
    const [selectedVideo, setSelectedVideo] = useState({});

    // Holds video id from url param
    const { videoId } = useParams();

    useEffect(() => {
        getAllVideos(apiKey);
    }, []);

    // Sets the selectedVideo assuming joke ID or videoListArr are non-empty  
    // Ensures that we don't try to get a video before we have the data required to retrieve one
    // So on the very 1st render of homepage (ie, visiting / without anything in url), this will
    // not run because neither videoID (no params) nor videoLIst are non-empty yet.
    // The dependencies ensure getVIdeo will be run when we pass in the video ID and when videolist finishes initializing
    useEffect(() => {
        if (videoId) {
            getVideo(videoId);
            window.scrollTo(0,0);
        } else if (videoListArr.length > 0) {
            getVideo(videoListArr[0].id); // sets default video if no video is specified in param
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
        }).catch((err) => {
            console.log("video fetch error: ", err);
        })
    }


    return (
        <>
            {/* Some of the components throw errors if passed empty selectedVideo, so either check for empty here or in the components. */}
            {Object.keys(selectedVideo).length !== 0 && <VideoPlayer selectedVideo={selectedVideo} />}
            <div className="flex-wrapper">
                {Object.keys(selectedVideo).length !== 0 && <VideoDetails selectedVideo={selectedVideo} />}
                <VideoList videoListArr={videoListArr} selectedVideo={selectedVideo} />
            </div>
        </>
    );

}

export default HomePage;