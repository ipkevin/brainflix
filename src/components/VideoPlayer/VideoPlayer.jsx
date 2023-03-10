import "./VideoPlayer.scss";

export default function VideoPlayer({selectedVideo}) {
    return (
        <section className="video">
            <video className="video__player" controls poster={selectedVideo.image} src={selectedVideo.video}></video>
        </section>
    );
}
