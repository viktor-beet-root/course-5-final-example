import PropTypes from "prop-types";
import MoveListImage from "./MoveListImage";
import { Link } from "react-router-dom";
import Genres from "../../components/Genres";

MoveModeDetail.propTypes = {
    move: PropTypes.object,
    genreHasheList: PropTypes.object,
};

function MoveModeDetail({ move, genreHasheList }) {
    return (
        <div className="p-5 w-full lg:w-1/2 hover:bg-gray-700 transition duration-500 rounded">
            <Link className="flex" to={`/moves/${move.id}`}>
                <div className="w-1/3 rounded-2xl overflow-hidden">
                    <MoveListImage move={move} />
                </div>
                <div className="px-8 w-2/3">
                    <h2 className="text-2xl font-bold mb-5">{move.title}</h2>
                    <p className="mb-5 text-3xl">
                        <strong className="text-orange-600 font-bold">Rating:</strong> {move.vote_average}
                    </p>
                    <p className="mb-5">
                        <strong className="text-orange-600 font-bold">Genres: </strong>
                        <Genres genre_ids={move.genre_ids} genreHasheList={genreHasheList} />
                    </p>
                    <p><strong className="font-bold text-orange-600">Overview:</strong></p>
                    <p className="mb-5">{move.overview}</p>
                    <p><strong className="text-orange-600 font-bold">Release Date:</strong> {move.release_date}</p>
                </div>
            </Link>
        </div>
    );
}

export default MoveModeDetail;
