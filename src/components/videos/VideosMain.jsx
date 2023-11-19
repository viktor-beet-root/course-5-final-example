import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getData from "../../api/getData";
import { moveIdSearchValue, videosUrl } from "../../config/config";
import useUrl from "../../hooks/useUrl";
import Trailer from "./Trailer";
import VideoGallery from "./videoGallery/VideoGallery";

VideosMain.propTypes = {
    moveId: PropTypes.number.isRequired,
};

function VideosMain({ moveId }) {
    const [videosList, setVideosList] = useState([]);
    const [url] = useUrl(videosUrl, { language: "en-US" });
    const trailer = videosList.find(
        (video) => video.type.toLocaleLowerCase() === 'trailer'
    );

    useEffect(
        () => {
            async function getVideos() {
                const data = await getData(url.replace(moveIdSearchValue, moveId));

                if (data && Array.isArray(data.results) && data.results.length) {
                    setVideosList(data.results);
                }
            }

            getVideos();
        },
        [moveId, url]
    );

    console.log(videosList, trailer);

    return (
        <div className="max-w-[1100px] mx-auto p-5">
            {trailer && <Trailer trailer={trailer} />}
            {videosList && <VideoGallery videosList={videosList} />}
        </div>
    );
}

export default VideosMain;
