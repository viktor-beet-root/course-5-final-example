import PropTypes from "prop-types";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

import SelectField from "./SelectField";
import { sortData, sortDirection } from "../config/config";

Sorter.propTypes = {
    sortValue: PropTypes.string,
    direction: PropTypes.string,
    onChange: PropTypes.func,
};

function Sorter({ sortValue, direction, onChange }) {
    function handleChangeSort(event) {
        onChange({
            value: event.target.value,
            direction: direction,
        });
    }

    function handleChangeDirection() {
        onChange({
            value: sortValue,
            direction: direction === sortDirection.desc ? sortDirection.asc : sortDirection.desc,
        });
    }

    const directionIcon =
        (direction === sortDirection.asc) ?
            <AiOutlineSortAscending size={40} /> :
            <AiOutlineSortDescending size={40} />;

    return (
        <div>
            <SelectField
                value={sortValue}
                optionsList={sortData}
                handleChange={handleChangeSort}
            />
            <button className="p-2" onClick={handleChangeDirection}>{directionIcon}</button>
        </div>
    );
}

export default Sorter;
