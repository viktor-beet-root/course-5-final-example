import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

ClearFilter.propTypes = {
    clearData: PropTypes.array.isRequired,
};

export default function ClearFilter({ clearData }) {
    function clearAllFilters() {
        clearData.forEach(
            (filterData) => {
                filterData.filterListOption.forEach(
                    (filter) => filterData.hendleChengeFilter(filter.id, filterData.filterName, false)
                );
            }
        );
    }
    return (
        <div className="p-2 flex mt-3">
            {clearData.map(
                (item) => {
                    return (
                        <ul key={item.filterName} className="flex gap-3 items-center">
                            <li className="font-bold">{item.filterTitle}:</li>
                            {
                                item.filterListOption.map(
                                    (filter) => {
                                        return (
                                            <li key={filter.id}>
                                                <button onClick={
                                                    () => {
                                                        item.hendleChengeFilter(filter.id, item.filterName, false);
                                                    }
                                                } className="flex items-center bg-gray-800 py-1 px-3 rounded-lg">
                                                    <FiX className="mr-1 bg-orange-600 rounded-full" /> {filter.name}
                                                </button>
                                            </li>
                                        );
                                    }
                                )
                            }
                        </ul>
                    );
                }
            )}
            <button onClick={clearAllFilters} className="flex items-center bg-orange-600 py-1 px-3 rounded-lg ml-6">
                <FiX className="mr-1 bg-gray-900 rounded-full" /> Clear All
            </button>
        </div>
    );
}
