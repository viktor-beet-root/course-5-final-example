import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeIcon: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    toggleOpenSidebar: PropTypes.func.isRequired,
};

function Sidebar({ isOpen, closeIcon, className, type, children, toggleOpenSidebar }) {
    const element = useRef();
    const defaultClass = 'py-4 px-6 bg-gray-800 z-50 w-[320px]';
    const baseClasses = `fixed top-0 bottom-0 transition-transform duration-300 ${type === 'left' ? 'left-0' : 'right-0'}`;

    const closeClass = (type === 'left' ? 'translate-x-[-100%]' : 'translate-x-[100%]');
    const componentClasses = className ? className : defaultClass;
    const openClass = 'translate-x-0';

    function hiddenElement() {
        if (!isOpen) element.current.classList.add('hidden');
    }

    useLayoutEffect(
        () => {
            if (isOpen) {
                element.current.classList.remove('hidden');
                window.requestAnimationFrame(
                    () => {
                        element.current.classList.remove(closeClass);
                        element.current.classList.add(openClass);
                    }
                );
            } else {
                element.current.classList.remove(openClass);
                element.current.classList.add(closeClass);
            }
        },
        [isOpen, openClass, closeClass]
    );

    return (
        <div
            onTransitionEnd={hiddenElement}
            ref={element}
            className={`${baseClasses} ${componentClasses} ${openClass}`}
        >
            <button
                onClick={() => { toggleOpenSidebar(); }}
                className="p-3 absolute right-5">
                {closeIcon}
            </button>

            {children}
        </div>
    );
}

export default Sidebar;
