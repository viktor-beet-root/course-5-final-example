import PropTypes from "prop-types";
import VideoGalleryItem from "./VideoGalleryItem";
import ShowMore from "../../ShowMore";
import { useState } from "react";
import Modal from "../../Modal";
import IfremaVideo from "../IfremaVideo";

VideoGallery.propTypes = {
    videosList: PropTypes.array.isRequired,
};

const defaultShows = 8;

function VideoGallery({ videosList }) {
    const [countShowVideo, setCountShowVideo] = useState(defaultShows);
    const [showVideo, setShowVideo] = useState(null);

    if (!videosList) return null;

    return (
        <>
            <h3 className="text-2xl font-bold mb-5 text-center">Videos</h3>

            <ShowMore
                list={videosList}
                countShow={countShowVideo}
                onChengeShow={() => { setCountShowVideo(countShowVideo + defaultShows); }}
                textBtn="Show more videos"
            >
                <div className="flex flex-wrap">
                    {
                        videosList.slice(0, countShowVideo).map(
                            (video) => <VideoGalleryItem
                                key={video.key}
                                video={video}
                                addShowVideo={() => { setShowVideo(video); }}
                            />
                        )
                    }
                </div>
            </ShowMore>
            {
                showVideo ?
                    <Modal
                        // title={showVideo.name}
                        onClose={() => { setShowVideo(null); }}
                    // buttons={[<button key={1} onClick={() => { setShowVideo(null); }}>Close</button>]}
                    >
                        <IfremaVideo youtubeId={showVideo.key} title={showVideo.name} />
                    </Modal> :
                    null
            }
        </>
    );
}

export default VideoGallery;
