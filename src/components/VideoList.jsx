import { useState, useEffect } from "react";
import Video from "./Video";

import "./VideoList.scss";

// Expecting that props has a videoListArr array that contains all of the video objects with minimal details
export default function VideoList({videoListArr, selectedVideo}) {
    // filter the video array to remove the currently selected video
    let currID = selectedVideo.id;
    const filteredArr = videoListArr.filter((element) => {
        return element.id !== currID;
    });

    return (
        <aside className="videoList">
            <h2 className="videoList__subtitle">Next Videos</h2>
            <ul className="videoList__wrapper">
                {filteredArr.map((videoItem) => (
                    <Video videoInfo={videoItem} key={videoItem.id} />
                ))}
            </ul>
        </aside>
    );
}
