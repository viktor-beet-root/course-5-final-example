import PropTypes from "prop-types";

const youtubeBaseUrl = 'https://www.youtube.com/embed/';

IfremaVideo.propTypes = {
    youtubeId: PropTypes.string.isRequired,
    title: PropTypes.string,
};

function IfremaVideo({ youtubeId, title }) {
    return (
        <iframe
            className="block w-full h-full"
            src={youtubeBaseUrl + youtubeId}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
    );
}

export default IfremaVideo;
