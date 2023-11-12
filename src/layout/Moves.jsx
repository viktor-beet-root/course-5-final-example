import MoveList from "./list/MoveList";
import { urlMoves } from "../config/config";
import useMoves from "../hooks/useMoves";
import useUrl from "../hooks/useUrl";
import Sorter from "../components/Sorter";
import useSort from "../hooks/useSort";

const deafaultSearchParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
    "vote_count.gte": 200,
};

function Moves() {
    const [sortValue, direction, handleSorter] = useSort();

    deafaultSearchParams.sort_by = `${sortValue}.${direction}`;

    const [url, page] = useUrl(urlMoves, deafaultSearchParams);
    const [moveList, totalPage, handlePageChange] = useMoves(url);

    return (
        <div className="px-3">
            <h1 className="text-5xl font-bold text-center mb-5">Moves</h1>
            <div className="flex p-5 bg-gray-900 rounded-2xl">
                <Sorter sortValue={sortValue} onChange={handleSorter} direction={direction} />
            </div>
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
