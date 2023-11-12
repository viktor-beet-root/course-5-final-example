import { useState } from "react";

import { sortData, sortDirection } from "../config/config";

export default function useSort() {
    const [sortValue, setSortValue] = useState(sortData[0].value);
    const [direction, setDirection] = useState(sortDirection.desc);

    function handleSorter(sortData) {
        if (sortValue !== sortData.value) {
            setSortValue(sortData.value);
        }

        if (sortData.direction !== direction) {
            setDirection(sortData.direction);
        }
    }

    return [sortValue, direction, handleSorter];
}
