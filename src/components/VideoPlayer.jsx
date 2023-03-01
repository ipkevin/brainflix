import './VideoPlayer.scss';

export default function VideoPlayer() {
    return (
      <section className="video">
        <video className="video__player" controls poster="https://placekitten.com/1920/1080" src="https://project-2-api.herokuapp.com/stream?api_key=neocat">blah</video>
      </section>
    )
}