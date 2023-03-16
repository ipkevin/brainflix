import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import VideoList from '../components/VideoList/VideoList';

export const apiUrlServ = "http://localhost:8080";



function HomePage(){
    
    
    // Holds the brief vid data, for the vid list
    const [videoListArr, setVideoListArr] = useState([]);

    // State: The currently selected video
    const [selectedVideo, setSelectedVideo] = useState({});

    // Holds video id from url param
    const { videoId } = useParams();

    useEffect(() => {
        getAllVideos();
    }, []);

    // Sets the selectedVideo assuming joke ID or videoListArr are non-empty  
    // Ensures that we don't try to get a video before we have the data required to retrieve one
    useEffect(() => {
        if (videoId) {
            getVideo(videoId);
            window.scrollTo(0,0);
        } else if (videoListArr.length > 0) {
            getVideo(videoListArr[0].id); // sets default video if no video is specified in param
        }

    }, [videoId, videoListArr])


    function getAllVideos() {
        let theRequest = apiUrlServ+"/videos";
        axios.get(theRequest).then( (result) => {
            setVideoListArr(result.data);
            // console.log(result);
        }).catch( (err) => {
            console.log("videolist fetch error: ", err);
        })
    }

    function getVideo(videoId){
        let theRequest = apiUrlServ+"/videos/"+videoId;
        axios.get(theRequest).then( (result) => {
            setSelectedVideo(result.data);
            // console.log("single video result: ", result)
        }).catch((err) => {
            console.log("video fetch error: ", err);
        })
    }

    // handler function that sends comment from form into api, then sets the selectedVideo again
    function postComment(event, videoId) {
        event.preventDefault();

        let theRequest = apiUrlServ+"/videos/"+videoId+"/comments";
        let commentObj = {
            name: "Anonymous",
            comment: event.target.commentinput.value
        }
        axios.post(theRequest, commentObj).then( result => {
            // console.log("axios comment post successful");
            getVideo(videoId);
        }).catch( error => {
            console.log("axios comment post error: ", error);
        });
        event.target.reset();
    }

    // Function to delete comments through the API. Will trigger a rerender as it re-requests the current video from API
    function deleteComment(event, videoId, commentId) {
        let theRequest = apiUrlServ+"/videos/"+videoId+"/comments/"+commentId;

        axios.delete(theRequest).then( result => {
            // console.log("axios delete successful");
            getVideo(videoId);
        }).catch( error => {
            console.log("axios delete error: ", error);
        })
    }

    return (
        <>
            {/* Some of the components throw errors if passed empty selectedVideo, so either check for empty here or in the components. */}
            {Object.keys(selectedVideo).length !== 0 && <VideoPlayer selectedVideo={selectedVideo} />}
            <div className="flex-wrapper">
                {Object.keys(selectedVideo).length !== 0 && <VideoDetails selectedVideo={selectedVideo} postComment={postComment} deleteComment={deleteComment} />}
                <VideoList videoListArr={videoListArr} selectedVideo={selectedVideo} />
            </div>
        </>
    );

}

export default HomePage;