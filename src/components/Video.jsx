import './Video.scss';

export default function Video() {
    return (
        <li className="videoList__item">
            <img className="videoList__thumb" src={'https://i.imgur.com/5qyCZrD.jpg'} />
            <div className="videoList__copy">
            <p className="videoList__videotitle">Become A Travel Pro In One Easy Lesson</p>
            <p className="videoList__author">Joe Bob Briggs</p>
            </div>
        </li>
    )
}