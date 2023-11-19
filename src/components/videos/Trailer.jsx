import IfremaVideo from "./IfremaVideo";
import PropTypes from "prop-types";

Trailer.propTypes = {
    trailer: PropTypes.object.isRequired,
};

function Trailer({ trailer }) {
    if (!trailer) return null;

    return (
        <>
            <h3 className="text-2xl font-bold mb-5 text-center">Trailer</h3>
            <div className="aspect-video mb-5">
                <IfremaVideo youtubeId={trailer.key} title={trailer.name} />
            </div>
        </>
    );
}

export default Trailer;
