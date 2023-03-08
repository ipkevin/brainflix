
import {useState,useEffect} from 'react';
import Video from "./Video";

import "./VideoList.scss";

// Expecting that props has a videoListArr array that contains all of the video objects with minimal details
export default function VideoList(props) {
    // filter the video array to remove the currently selected video
    let currID = props.selectedVideo.id;
    const filteredArr = props.videoListArr.filter((element) => {
        return element.id !== currID;
    });

    // This state and toggleFlag function determine if window is small enough to crop videolist titles.  If so, then sets flag.
    const [ shortenFlag, setShortenFlag ] = useState(false);

    function toggleFlag() {
        if (window.innerWidth < 768) {
            setShortenFlag(true);
        } else {
            setShortenFlag(false);
        }
    }
    
    useEffect( () => {
        window.addEventListener("resize", toggleFlag);
        return () => window.removeEventListener("resize", toggleFlag);
    }, []);

    return (
        <aside className="videoList">
            <h2 className="videoList__subtitle">Next Videos</h2>
            <ul className="videoList__wrapper">
                {filteredArr.map((videoItem) => (
                    <Video videoInfo={videoItem} key={videoItem.id} videoListClickHandler={props.videoListClickHandler} shortenFlag={shortenFlag} />
                ))}
            </ul>
        </aside>
    );
}
