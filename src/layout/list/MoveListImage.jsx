import PropTypes from "prop-types";
import { imagesUrl, noImagePath } from "../../config/config";

MoveListImage.propTypes = {
    move: PropTypes.object,
};

function MoveListImage({ move }) {
    const imagePath = (move.poster_path || move.backdrop_path) ?
        imagesUrl + (move.poster_path || move.backdrop_path) :
        noImagePath;

    return (
        <img className="w-full" src={imagePath} alt="move.title" />
    );
}

export default MoveListImage;
