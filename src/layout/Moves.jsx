import { FiX } from "react-icons/fi";

import { urlMoves } from "../config/config";
import useMoves from "../hooks/useMoves";
import useUrl from "../hooks/useUrl";
import useFiltersGenre from "../hooks/useFiltersGenre";
import useSort from "../hooks/useSort";
import useSidebar from "../hooks/useSidebar";

import MoveList from "./list/MoveList";
import Filters from "../components/filters/Filters";
import Sidebar from "../components/Sidebar";
import Sorter from "../components/Sorter";
import { AiFillFilter } from "react-icons/ai";

const deafaultSearchParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
    "vote_count.gte": 200,
};

function Moves() {
    const [filterDataGenre, checkedGenreListId, hendleChengeGenreFilter] = useFiltersGenre();
    const filterData = [filterDataGenre];

    const [isOpenSidebar, toggleOpenSidebar] = useSidebar();

    const [sortValue, direction, handleSorter] = useSort();

    deafaultSearchParams.with_genres = checkedGenreListId;
    deafaultSearchParams.sort_by = `${sortValue}.${direction}`;

    const [url, page] = useUrl(urlMoves, deafaultSearchParams);
    const [moveList, totalPage, changeSearchParams] = useMoves(url);

    return (
        <>
            <div className="px-3">
                <h1 className="text-5xl font-bold text-center mb-5">Moves</h1>
                <div className="flex p-5 bg-gray-900 rounded-2xl">
                    <Sorter sortValue={sortValue} onChange={handleSorter} direction={direction} />
                    <button className="ml-5 p-3 text-2xl rounded border border-orange-600" onClick={toggleOpenSidebar}>
                        <AiFillFilter className="inline-block mr-3 align-[-3px]" /> Filters
                    </button>
                </div>
                <MoveList
                    moveList={moveList}
                    page={page}
                    totalPage={totalPage}
                    handlePageChange={changeSearchParams}
                />
            </div>
            <Sidebar
                isOpen={isOpenSidebar}
                type='left'
                className={'border-r py-4 px-6 bg-gray-800 z-50 w-[320px]'}
                closeIcon={<FiX size={24} />}
                toggleOpenSidebar={toggleOpenSidebar}
            >
                <Filters filterData={filterData} onChange={hendleChengeGenreFilter} />
            </Sidebar>
        </>
    );
}

export { Moves as Component };

export default Moves;
