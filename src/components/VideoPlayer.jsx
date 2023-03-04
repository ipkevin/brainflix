import "./VideoPlayer.scss";

export default function VideoPlayer(props) {
    return (
        <section className="video">
            <video className="video__player" controls poster={props.selectedVideo.image} src={props.selectedVideo.video}></video>
        </section>
    );
}
