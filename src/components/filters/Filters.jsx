import PropTypes from 'prop-types';
import FilterCheckList from './filterCheckList/FilterCheckList';

Filters.propTypes = {
    filterData: PropTypes.array.isRequired,
};

function Filters({ filterData }) {
    return (
        <>
            <h2 className="border-b text-4xl font-bold pb-5 mb-5">Filters</h2>
            <div className='absolute top-[100px] left-0 right-0 px-6 bottom-6 overflow-auto'>
                {
                    filterData.map(
                        (filter, index) => {
                            if (filter.filterType === 'check') {
                                return <FilterCheckList
                                    key={index}
                                    checkList={filter.filterListOption}
                                    nameFilter={filter.filterName}
                                    titleFilter={filter.filterTitle}
                                    onChange={filter.hendleChengeFilter}
                                />;
                            }
                        }
                    )
                }
            </div>
        </>
    );
}

export default Filters;
