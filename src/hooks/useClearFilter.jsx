export default function useClearFilter(filterData) {
    const clearData = filterData.map(
        (filter) => {
            filter.filterListOption = filter.filterListOption.filter(
                (filterItem) => filterItem.checked
            );

            return filter;
        }
    );

    const isShowClearList = clearData.some(
        (filter) => filter.filterListOption.some(
            (filterItem) => filterItem.checked
        )
    );

    return [clearData, isShowClearList];
}
