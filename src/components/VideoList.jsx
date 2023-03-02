
import Video from './Video';

import './VideoList.scss';

// Expecting that props has a videoListArr array that contains all of the video objects with minimal details
export default function VideoList(props) {
    
    // filter the video array to remove the currently selected video
    let currID = props.selectedVideo.id;
    const filteredArr = props.videoListArr.filter( element => {
        return (element.id != currID);
    })
    
    return (
        <aside className="videoList">
            <p className="videoList__subtitle">Next Videos</p>
            <ul className="videoList__wrapper">
                {filteredArr.map (videoItem => (
                    <Video videoInfo={videoItem} key={videoItem.id} videoListClickHandler={props.videoListClickHandler} />    
                    )
                )}
            </ul>
        </aside>
    )
}