import "./Video.scss";


export default function Video(props) {

    function cropMobile(){
        let theTitle = props.videoInfo.title;
        console.log("the title: ", theTitle);
        if (theTitle.length > 30) {
            if (window.screen.width < 768){
                return (theTitle.slice(0,29));
            } else {
                return theTitle;
            }
        } else {
            return theTitle;
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
                <p className="videoList__videotitle">{props.videoInfo.title}</p>
                {/* <p className="videoList__videotitle">{cropMobile()}</p> */}
                <p className="videoList__author">{props.videoInfo.channel}</p>
            </div>
        </li>
    );
}
