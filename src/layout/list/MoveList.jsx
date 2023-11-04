import PropTypes from "prop-types";
import { Pagination } from "@mui/material";
import Move from "./Move";

MoveList.propTypes = {
    moveList: PropTypes.array,
    page: PropTypes.number,
    totalPage: PropTypes.number,
    handlePageChange: PropTypes.func,
};

function MoveList({ moveList, page, totalPage, handlePageChange }) {
    return (
        <>
            <div className="flex flex-wrap">
                {moveList?.map(
                    (move) => <Move key={move.id} move={move} />
                )}
            </div>
            <Pagination count={totalPage} page={page} onChange={handlePageChange} siblingCount={2} boundaryCount={1} />
        </>
    );
}

export default MoveList;
