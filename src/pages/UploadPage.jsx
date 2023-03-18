import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { apiUrlServ } from './HomePage';

import "./UploadPage.scss";

export default function UploadPage() {
    const [modal, setModal] = useState("");
    const [titleField, setTitleField] = useState("");
    const [descField, setDescField] = useState("");

    const navAway = useNavigate();

    async function thankAndForward(){
        await setModal("show-modal");
        setTimeout(() => navAway("/"), 2000);
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
        
        // contains all the submission data including the image binary
        let formData = new FormData();
        formData.append("image", event.target.imagefield.files[0]);
        formData.append("description", event.target.descfield.value);
        formData.append("title", event.target.titlefield.value);

    
        axios.post(`${apiUrlServ}/videos`, formData)
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
                    <form className="uploadform" encType="multipart/form-data" onSubmit={submitHandler}>
                        <div className="uploadform__group-thumb">
                            <label className="uploadform__label">Video Thumbnail (3MB limit)</label>
                            <input type="file" className="uploadform__file" accept="image/*" name="imagefield" id="imagefield"></input> 
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
