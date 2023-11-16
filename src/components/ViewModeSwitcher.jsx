import PropType from "prop-types";
import { viewModeValue } from "../config/config";

ViewModeSwitcher.propTypes = {
    mode: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
};

function ViewModeSwitcher({ mode, onChange }) {
    const buttonClasses = 'ml-5 p-3 text-2xl rounded border border-orange-600 flex items-center gap-2';

    return (
        <div className="ml-auto flex items-center">
            <span className="hidden lg:inline">View mode:</span>
            <button
                className={`${buttonClasses} ${mode === viewModeValue.list.name ? 'bg-orange-600' : ''}`}
                title={viewModeValue.list.label}
                onClick={() => { onChange(viewModeValue.list.name); }}
            >
                {viewModeValue.list.icon}
            </button>
            <button
                className={`${buttonClasses} ${mode === viewModeValue.details.name ? 'bg-orange-600' : ''}`}
                title={viewModeValue.details.label}
                onClick={() => { onChange(viewModeValue.details.name); }}
            >
                {viewModeValue.details.icon}
            </button>
            <button
                className={`${buttonClasses} ${mode === viewModeValue.thumbnails.name ? 'bg-orange-600' : ''}`}
                title={viewModeValue.thumbnails.label}
                onClick={() => { onChange(viewModeValue.thumbnails.name); }}
            >
                {viewModeValue.thumbnails.icon}
            </button>
        </div>
    );
}

export default ViewModeSwitcher;
