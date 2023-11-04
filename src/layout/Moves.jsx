import MoveList from "./list/MoveList";
import { urlMoves } from "../config/config";
import useMoves from "../hooks/useMoves";
import useUrl from "../hooks/useUrl";

const deafaultSearchParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
};

function Moves() {
    const [url, page] = useUrl(urlMoves, deafaultSearchParams);
    const [moveList, totalPage, handlePageChange] = useMoves(url);

    return (
        <div className="px-3">
            <h1 className="text-5xl font-bold text-center mb-5">Moves</h1>
            <MoveList
                moveList={moveList}
                page={page}
                totalPage={totalPage}
                handlePageChange={handlePageChange}
            />
        </div>
    );
}

export { Moves as Component };

export default Moves;
