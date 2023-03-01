
import Video from './Video';

import './VideoList.scss';

export default function VideoList() {
    return (
        <aside className="videoList">
            <p className="videoList__subtitle">Next Videos</p>
            <ul className="videoList__wrapper">
                <Video />
                <Video />
                <Video />
                <Video />
            </ul>
        </aside>
    )
}