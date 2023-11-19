import PropTypes from "prop-types";
import { imagesUrl } from "../../config/config";

Actor.propTypes = {
    actor: PropTypes.object.isRequired,
};

function Actor({ actor }) {
    return (
        <div className="flex flex-col items-center justify-center w-1/6 text-center">
            {<img className="w-[150px] h-[150px] rounded-full object-cover border-4 hover:scale-[200%] transition-all" src={`${imagesUrl + actor.profile_path}`} alt="" />}
            <span className="text-xl">{actor.character}</span>
            <span className="text-xs mt-auto">{actor.name}</span>
        </div>
    );
}

export default Actor;
