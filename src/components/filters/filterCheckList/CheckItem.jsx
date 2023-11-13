import PropTypes from 'prop-types';
import { BsDashSquareFill, BsPlusSquareFill } from "react-icons/bs";

CheckItem.propTypes = {
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

function CheckItem({ name, id, isChecked, onChange }) {
    function handleChange() {
        onChange(id, !isChecked);
    }

    const icon = isChecked ?
        <BsPlusSquareFill className="inline-block mr-3" /> :
        <BsDashSquareFill className="inline-block mr-3" />;

    const cssClass = 'p-3 border-b cursor-pointer hover:bg-slate-900' + (isChecked ? ' text-orange-600 bg-slate-900' : '');

    return (
        <li className={cssClass} onClick={handleChange}>
            {icon} {name}
        </li>
    );
}

export default CheckItem;
