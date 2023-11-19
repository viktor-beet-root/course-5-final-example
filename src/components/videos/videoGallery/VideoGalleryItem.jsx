import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

VideoGalleryItem.propTypes = {
    video: PropTypes.object.isRequired,
    addShowVideo: PropTypes.func.isRequired,
};

const youtubeIdTmplate = '::youtubeId::';

const prevImageUrls = {
    hq: `https://i.ytimg.com/vi/${youtubeIdTmplate}/hqdefault.jpg`,
    max: `https://i.ytimg.com/vi/${youtubeIdTmplate}/maxresdefault.jpg`
};

function getYoutubeImageUrl(youtubeId) {
    return {
        hq: prevImageUrls.hq.replace(youtubeIdTmplate, youtubeId),
        max: prevImageUrls.max.replace(youtubeIdTmplate, youtubeId),
    };
}

function VideoGalleryItem({ video, addShowVideo }) {
    if (!video) return null;

    const youtubeImageUrl = getYoutubeImageUrl(video.key);

    return (
        <div
            className="w-1/4 aspect-square border relative overflow-hidden cursor-pointer group"
            onClick={addShowVideo}
        >
            <img className="w-full h-[135%] -top-11 object-cover absolute -z-10" src={youtubeImageUrl.hq} alt={video.name} />
            <div className="bg-gray-800/90 p-2 -translate-y-full group-hover:translate-y-0 transition-transform">
                <p>{video.type}</p>
                <p>{video.name}</p>
            </div>
            <span className="w-[50px] h-[50px] bg-white/70 p-1 rounded-full flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 group-hover:scale-100 transition-transform ">
                <FaPlay className="text-orange-600" size={15} />
            </span>
        </div>
    );
}

export default VideoGalleryItem;
