import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { imagesUrl, noImagePath } from "../../config/config";

Move.propTypes = {
    move: PropTypes.object,
};

function Move({ move }) {
    const imagePath = (move.poster_path || move.backdrop_path) ?
        imagesUrl + (move.poster_path || move.backdrop_path) :
        noImagePath;

    return (
        <div key={move.id} className="group p-5 w-1/2 lg:w-1/5 md:w-1/3 rounded hover:bg-gray-700 transition duration-500">
            <Link className="block relative" to={`/moves/${move.id}`}>
                <div className="absolute top-0 right-0 bg-orange-600 w-[50px] h-[50px] flex justify-center items-center text-2xl font-bold">
                    {move.vote_average}
                </div>
                <h2 className="absolute bottom-0 w-full p-3 transition duration-500 text-2xl font-bold bg-gray-800/30 text-white group-hover:bg-gray-800/80">{move.title}</h2>
                <img className="w-full" src={imagePath} alt="move.title" />
            </Link>
        </div>
    );
}

export default Move;
