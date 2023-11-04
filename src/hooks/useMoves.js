import { useState, useEffect } from "react";
import getData from "../api/getData";
import { useSearchParams } from "react-router-dom";

function useMoves(url) {
    const [moveList, setMoveList] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    function handlePageChange(event, newPage) {
        searchParams.set('p', newPage);
        setSearchParams(searchParams);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        async function getMove() {
            const data = await getData(url);

            if (!data.results) return;

            setMoveList(data.results);
            setTotalPage(Number(data.total_pages) > 500 ? 500 : Number(data.total_pages));
        }

        getMove();
    }, [url]);

    return [moveList, totalPage, handlePageChange];
}

export default useMoves;
