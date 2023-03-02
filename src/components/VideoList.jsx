
import Video from './Video';

import './VideoList.scss';

// Expecting that props has a videoListArr array that contains all of the video objects with minimal details
export default function VideoList(props) {
    return (
        <aside className="videoList">
            <p className="videoList__subtitle">Next Videos</p>
            <ul className="videoList__wrapper">
                {props.videoListArr.map (videoItem => (
                    <Video videoInfo={videoItem} key={videoItem.id} />    
                    )
                )}
            </ul>
        </aside>
    )
}