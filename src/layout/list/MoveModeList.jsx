import PropTypes from "prop-types";
import Genres from "../../components/Genres";
import { Link } from "react-router-dom";

MoveModeList.propTypes = {
    move: PropTypes.object.isRequired,
    genreHasheList: PropTypes.object.isRequired,
};

function MoveModeList({ move, genreHasheList }) {
    return (
        <div className="border-b text-2xl border-orange-600 hover:bg-gray-800">
            <Link className="p-4 flex w-full" to={`/moves/${move.id}`}>
                <span className="">{move.title}</span>
                <span className="hidden lg:inline-block ml-10 pl-10 border-l border-orange-600">
                    <span className="text-orange-600 inline-block pr-4">Generes: </span>
                    <Genres genre_ids={move.genre_ids} genreHasheList={genreHasheList} />
                </span>
                <span className="text-orange-600 inline-block pr-4 ml-auto">{move.vote_average}</span>
            </Link>
        </div>
    );
}

export default MoveModeList;
