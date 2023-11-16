import { useState } from "react";
import { viewModeValue } from "../config/config";

export default function useViewMode() {
    const [mode, setMode] = useState(
        () => {
            const viewMode = JSON.parse(window.localStorage.getItem('viewMode'));
            return viewMode ? viewMode : viewModeValue.thumbnails.name;
        }
    );

    function changeViewMode(newMode) {
        if (newMode !== mode) {
            setMode(newMode);
            window.localStorage.setItem('viewMode', JSON.stringify(newMode));
        }
    }

    return [mode, changeViewMode];
}
