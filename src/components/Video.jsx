import {useState} from 'react';
import "./Video.scss";


export default function Video(props) {

    // Crops the video title if screen size is smaller than 768px wide. Crops at 40 characters and does not crop
    // in middle of words.
    function cropMobile(){
        let fullTitle = props.videoInfo.title;
        if ((fullTitle.length > 40) && (window.innerWidth < 768)) {
            // If last word would be truncated by char limit, then truncate before it.
            let lastSpace = fullTitle.lastIndexOf(" ",40); // use 1 char longer to find blank in case last word just fits inside limit.
            return ((fullTitle.slice(0,lastSpace)).trim() + "...");
        } else {
            return fullTitle;
        }
    }

    return (
        <li
            className="videoList__item"
            onClick={() => {
                props.videoListClickHandler(props.videoInfo.id);
            }}
        >
            <img className="videoList__thumb" src={props.videoInfo.image} />
            <div className="videoList__copy">
                <p className="videoList__videotitle">{cropMobile()}</p>
                <p className="videoList__author">{props.videoInfo.channel}</p>
            </div>
        </li>
    );
}
