import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Video.scss";

export default function Video({videoInfo}) {

    // Holds the video title. It's a state so we can trigger a rerender automatically if we shorten title.
    const [croppableTitle, setCroppableTitle] = useState("");

    // Crops the video title if conditions are met (title > 40 chars and window is < 768)
    // Using fxn instead of CSS-only solution as all fully supported CSS solutions limit based on width of container not chars
    function cropMobile() {
        if (window.innerWidth < 768  && videoInfo.title.length > 40) {
            // If last word would be truncated by char limit, then truncate before it.
            // Using 1 char longer to find blank allows for case where last word just fits inside limit.
            let lastSpace = videoInfo.title.lastIndexOf(" ", 40);
            setCroppableTitle(videoInfo.title.slice(0, lastSpace).trim() + "...");
        } else {
            setCroppableTitle(videoInfo.title);
        }
    }

    // Setup event listener on window resize to trigger crop if conditions met
    // Alternative with fewer eventlisteners would be to setup listener code in the parent videolist component, 
    // but then the code is more complex (parent must pass state flag into children, then children have fxn to crop titles if flag is set)
    useEffect(() => {
        window.addEventListener("resize", cropMobile);
        cropMobile(); // <- accounts for initial mount, else it won't run until window resized
        return () => window.removeEventListener("resize", cropMobile);
    }, [])

    return (
        <li className="videoList__item">
            <Link className="videoList__item-containing-link" to={`/video/${videoInfo.id}`}>
                <img className="videoList__thumb" src={videoInfo.image} />
            </Link>
            <div className="videoList__copy">
                <p className="videoList__videotitle">{croppableTitle}</p>
                <p className="videoList__author">{videoInfo.channel}</p>
            </div>
        </li>
    );
}
