import './Video.scss';

export default function Video(props) {
    return (
        <li className="videoList__item" onClick={() => {
            props.videoListClickHandler(props.videoInfo.id);
        }}>
            <img className="videoList__thumb" src={props.videoInfo.image} />
            <div className="videoList__copy">
                <p className="videoList__videotitle">{props.videoInfo.title}</p>
                <p className="videoList__author">{props.videoInfo.channel}</p>
            </div>
        </li>
    )
}