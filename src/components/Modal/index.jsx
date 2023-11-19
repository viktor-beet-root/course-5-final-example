import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

Modal.propTypes = {
    title: PropTypes.string,
    buttons: PropTypes.array,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

function Modal({ title, buttons, children, onClose }) {
    function close() {
        onClose();
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 group" onClick={close}>
                <button
                    className="absolute right-10 top-10 bg-white/20 hover:bg-white/50 group-hover:bg-white/50 transition-colors p-2 rounded-full text-gray-900"
                >
                    <IoCloseSharp size={30} />
                </button>
            </div>
            <div className="rounded-2xl flex flex-col bg-gray-800 max-w-[80%] aspect-video w-full h-full max-h-[80%] overflow-y-auto fixed center">
                {title && <header className="p-5 border-b">{title}</header>}
                <div className="p-5 flex-grow ">
                    {children}
                </div>
                {
                    buttons && buttons.length && (
                        <footer className="p-5 border-t flex justify-end gap-5">
                            {
                                buttons.map(
                                    (button) => button
                                )
                            }
                        </footer>
                    )
                }
            </div>
        </>
    );
}

export default Modal;
