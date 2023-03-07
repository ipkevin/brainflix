import {Link} from 'react-router-dom';

import './UploadPage.scss';


export default function UploadPage() {
    return (
        <div className="flex-wrapper">
            <div className="uploadform__wrapper">
                <h1 className="uploadform__title">Upload Video</h1>
                <form className="uploadform">
                    <label>Video Thumbnail</label>
                    <img src="" alt="video thumbnail" />
                    <label>Title your video</label>
                    <input className="uploadform__titlefield" type="text" id="titlefield" name="titlefield" placeholder="Add a title to your video"></input>
                    <label>Add a video description</label>
                    <textarea className="uploadform__descfield" id="descfield" name="descfield" placeholder="Add a description to your video"></textarea>
                    <button className="uploadform__button button">Publish</button>
                    <Link to="/" className="uploadform__cancel">Cancel</Link>
                </form>
            </div>
        </div>
    )
}