import { Link } from "react-router-dom";
import "./Video.scss";

export default function Video(props) {
    // Crops the video title and returns it if conditions are met (title > 40 chars and window is < 768)
    // Uses props for shortenFlag to determine window size
    // Using fxn instead of CSS-only solution as all fully supported CSS solutions limit based on width of container not chars
    function cropMobile() {
        let fullTitle = props.videoInfo.title;

        if (props.shortenFlag && fullTitle.length > 40) {
            // If last word would be truncated by char limit, then truncate before it.
            // Using 1 char longer to find blank allows for case where last word just fits inside limit.
            let lastSpace = fullTitle.lastIndexOf(" ", 40);
            return fullTitle.slice(0, lastSpace).trim() + "...";
        } else {
            return fullTitle;
        }
    }
    let croppableTitle = cropMobile(); // React does not allow using functions directly in return html

    return (
        <li className="videoList__item">
            <Link className="videoList__item-containing-link" to={`/video/${props.videoInfo.id}`}>
                <img className="videoList__thumb" src={props.videoInfo.image} />
            </Link>
            <div className="videoList__copy">
                <p className="videoList__videotitle">{croppableTitle}</p>
                <p className="videoList__author">{props.videoInfo.channel}</p>
            </div>
        </li>
    );
}
