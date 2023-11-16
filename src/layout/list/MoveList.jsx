import PropTypes from "prop-types";
import { Pagination } from "@mui/material";
import Move from "./Move";
import scrollTop from "../../utils/scrollTop";
import CircularProgress from '@mui/material/CircularProgress';
import { viewModeValue } from "../../config/config";
import MoveModeList from "./MoveModeList";
import MoveModeDetail from "./MoveModeDetail";

MoveList.propTypes = {
    moveList: PropTypes.array,
    page: PropTypes.number,
    totalPage: PropTypes.number,
    viewMode: PropTypes.string,
    genreHasheList: PropTypes.object,
    handlePageChange: PropTypes.func,
};

function MoveList({ moveList, page, totalPage, viewMode, genreHasheList, handlePageChange }) {
    function changePage(event, newPage) {
        handlePageChange({ p: newPage });
        scrollTop();
    }

    if (!moveList.length) return <CircularProgress />;

    return (
        <>
            <div className={`${viewMode !== viewModeValue.list.name ? "flex flex-wrap" : ""} p-5`}>
                {
                    moveList.map(
                        (move) => {
                            if (viewMode === viewModeValue.thumbnails.name) {
                                return <Move key={move.id} move={move} />;
                            }

                            if (viewMode === viewModeValue.list.name) {
                                return <MoveModeList key={move.id} genreHasheList={genreHasheList} move={move} />;
                            }

                            if (viewMode === viewModeValue.details.name) {
                                return <MoveModeDetail key={move.id} genreHasheList={genreHasheList} move={move} />;
                            }
                        }
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
