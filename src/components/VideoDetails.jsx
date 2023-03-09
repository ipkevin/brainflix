import likesIcon from "../assets/icons/likes.svg";
import viewsIcon from "../assets/icons/views.svg";

import CommentsArea from "./CommentsArea";
import "./VideoDetails.scss";

export default function VideoDetails({selectedVideo, postComment, deleteComment}) {

    return (
        <main>
            <article className="description">
                <h1 className="description__title">{selectedVideo.title}</h1>
                <section className="description__credits">
                    <p className="description__author">By {selectedVideo.channel}</p>
                    <p className="description__views">
                        <img className="description__views-icon" src={viewsIcon} alt="view icon" />
                        {selectedVideo.views}
                    </p>
                    <p className="description__date">{new Date(selectedVideo.timestamp).toLocaleDateString()}</p>
                    <p className="description__likes">
                        <img className="description__likes-icon" src={likesIcon} alt="Likes icon" />
                        {selectedVideo.likes}
                    </p>
                </section>
                <p className="description__body">{selectedVideo.description}</p>
            </article>
            <CommentsArea selectedVideo={selectedVideo} postComment={postComment} deleteComment={deleteComment} />
        </main>
    );
}
