import PropTypes from "prop-types";

ShowMore.propTypes = {
    list: PropTypes.array.isRequired,
    textBtn: PropTypes.string.isRequired,
    children: PropTypes.node,
    onChengeShow: PropTypes.func.isRequired,
    countShow: PropTypes.number.isRequired,
};

function ShowMore({ list, countShow, onChengeShow, textBtn = "Show more", children }) {
    if (!list) return null;

    return (
        <>
            {children}
            <div className="w-full">
                {
                    (list.length > countShow) && <button
                        className="mx-auto mt-10 bg-slate-900 block py-2 px-4 rounded text-center"
                        onClick={() => { onChengeShow(); }}>
                        {textBtn}
                    </button>
                }
            </div>
        </>
    );
}

export default ShowMore;
