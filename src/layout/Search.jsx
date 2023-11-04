import { useSearchParams } from "react-router-dom";
import { searchMovieUrl } from "../config/config";
import useUrl from "../hooks/useUrl";
import useMoves from "../hooks/useMoves";
import MoveList from "./list/MoveList";

const deafaultSearchParams = {
    query: '',
    include_adult: false,
    language: 'en-US',
    page: 1,
};

function Search() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    deafaultSearchParams.query = search;
    const [url, page] = useUrl(searchMovieUrl, deafaultSearchParams);
    const [moveList, totalPage, handlePageChange] = useMoves(url);

    return (
        <>
            <h1>Search results</h1>
            <MoveList
                moveList={moveList}
                page={page}
                totalPage={totalPage}
                handlePageChange={handlePageChange}
            />
        </>
    );
}

export { Search as Component };

export default Search;
