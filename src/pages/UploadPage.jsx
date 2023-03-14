import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// import videoThumb from "../assets/images/upload-video-preview.jpg";
// import videoThumb from "http://localhost:8080/upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
    const [modal, setModal] = useState("");
    const navAway = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        await setModal("show-modal");
        setTimeout(() => navAway("/"), 2000);
    }
    return (
        <>
            <div className={`uploadform__modal ${modal}`}>Thank you!</div>
            <div className="flex-wrapper flex-wrapper--underlined">
                <div className="uploadform__wrapper">
                    <h1 className="uploadform__title">Upload Video</h1>
                    <form className="uploadform" onSubmit={submitHandler}>
                        <div className="uploadform__group-thumb">
                            <label className="uploadform__label">Video Thumbnail</label>
                            {/* <img className="uploadform__thumb" src={videoThumb} alt="video thumbnail" /> */}
                            <img className="uploadform__thumb" src="http://localhost:8080/upload-video-preview.jpg" alt="video thumbnail" />
                        </div>
                        <div className="uploadform__group-inputs">
                            <label className="uploadform__label" htmlFor="titlefield">
                                Title your video
                            </label>
                            <input className="uploadform__titlefield uploadform__input" type="text" id="titlefield" name="titlefield" placeholder="Add a title to your video"></input>
                            <label className="uploadform__label" htmlFor="descfield">
                                Add a video description
                            </label>
                            <textarea className="uploadform__descfield uploadform__input" id="descfield" name="descfield" placeholder="Add a description to your video"></textarea>
                        </div>
                        <div className="uploadform__group-submit">
                            <button className="uploadform__button button">Publish</button>
                            <Link to="/" className="uploadform__cancel">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
