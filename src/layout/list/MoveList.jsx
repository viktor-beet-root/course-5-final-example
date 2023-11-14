import PropTypes from "prop-types";
import { Pagination } from "@mui/material";
import Move from "./Move";
import scrollTop from "../../utils/scrollTop";
import CircularProgress from '@mui/material/CircularProgress';

MoveList.propTypes = {
    moveList: PropTypes.array,
    page: PropTypes.number,
    totalPage: PropTypes.number,
    handlePageChange: PropTypes.func,
};

function MoveList({ moveList, page, totalPage, handlePageChange }) {
    function changePage(event, newPage) {
        handlePageChange({ p: newPage });
        scrollTop();
    }

    if (!moveList.length) return <CircularProgress />;

    return (
        <>
            <div className="flex flex-wrap">
                {
                    moveList.map(
                        (move) => <Move key={move.id} move={move} />
                    )
                }
            </div>
            <div className="bg-gray-900 p-4 rounded-2xl flex justify-center">
                <Pagination className="text-white" sx={{
                    '.MuiButtonBase-root': {
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, .4)',
                    },
                    '.MuiButtonBase-root:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, .2)',
                    },
                    '.Mui-selected': {
                        backgroundColor: 'rgb(234 88 12)',
                        pointerEvents: 'none',
                    },
                    '.Mui-selected:hover': {
                        backgroundColor: 'rgb(234 88 12)',
                    },
                    '.MuiPagination-ul': {
                        gap: '10px'
                    }
                }} count={totalPage} page={page} onChange={changePage} siblingCount={2} boundaryCount={1} />
            </div>
        </>
    );
}

export default MoveList;
