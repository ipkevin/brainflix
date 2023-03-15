import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from 'axios';
import { apiUrlServ } from './HomePage';

// import videoThumb from "../assets/images/upload-video-preview.jpg";
// import videoThumb from "http://localhost:8080/upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
    const [modal, setModal] = useState("");
    const [titleField, setTitleField] = useState("");
    const [descField, setDescField] = useState("");

    const navAway = useNavigate();

    async function thankAndForward(){
        await setModal("show-modal");
        setTimeout(() => navAway("/"), 3000);
    }
    function handleTitleChange(event) {
        setTitleField(event.target.value);
    }
    function handleDescChange(event) {
        setDescField(event.target.value);
    }
    function isTitleValid() {
        if (titleField !== "" && titleField.length >= 8) return true;
        return false;
    }
    function isDescValid() {
        if (descField !== "" && descField.length >= 12) return true;
        return false;
    }
    function isValid() {
        if (isTitleValid() && isDescValid()) return true;
        return false;
    }
    
    function submitHandler(event) {
        event.preventDefault();
        let videoObj = {
            id: uuid(),
            title: event.target.titlefield.value,
            channel: "Moo",
            image: "http://localhost:8080/upload-video-preview.jpg",
            description: event.target.descfield.value,
            views: "1,000,000",
            likes: "188.888",
            duration: "1:23",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: []
        }
        axios.post(`${apiUrlServ}/videos`, videoObj)
            .then(result => {
                thankAndForward();
            }).catch(error => {
                alert("Error posting: ",error);
            });        
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
                            <img className="uploadform__thumb" src="http://localhost:8080/upload-video-preview.jpg" alt="video thumbnail" />
                        </div>
                        <div className="uploadform__group-inputs">
                            <label className="uploadform__label" htmlFor="titlefield">
                                {(!isTitleValid() && titleField.length >0) ? <span className="uploadform__label--error">Min 8 characters please!</span> : "Title your video"}
                            </label>
                            <input className={`uploadform__titlefield uploadform__input ${(!isTitleValid() && titleField.length >0) ? "uploadform__input--error" : ""}`} value={titleField} onChange={handleTitleChange} type="text" id="titlefield" name="titlefield" placeholder="Add a title to your video"></input>
                            <label className="uploadform__label" htmlFor="descfield">
                                {(!isDescValid() && descField.length >0) ? <span className="uploadform__label--error">Min 12 characters please!</span> : "Add a video description"}
                            </label>
                            <textarea className={`uploadform__descfield uploadform__input ${(!isDescValid() && descField.length >0) ? 'uploadform__input--error' : ''}`} value={descField} onChange={handleDescChange} id="descfield" name="descfield" placeholder="Add a description to your video"></textarea>
                        </div>
                        <div className="uploadform__group-submit">
                            <button className="uploadform__button button" disabled={!isValid()}>Publish</button>
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
