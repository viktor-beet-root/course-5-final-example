import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { inputStyle, searchUrl } from "../config/config";

Search.propTypes = {
    className: PropTypes.string,
};

function Search({ className }) {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    function searchHandler(e) {
        e.preventDefault();

        navigate(`${searchUrl}?search=${searchValue}`);
    }

    return (
        <form className={className} method="get" onSubmit={searchHandler} action="search">
            <TextField
                size="small"
                label="Search"
                InputProps={{ className: 'overflow-hidden' }}
                sx={inputStyle}
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
                name="search"
                variant="outlined" />
            <button type="submit" className="p-2.5 text-sm ml-[-5px] z-1 relative font-medium h-full text-white bg-orange-600 rounded-r-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default Search;
