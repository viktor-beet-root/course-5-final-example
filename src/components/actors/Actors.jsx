import PropTypes from "prop-types";
import { actorsUrl, moveIdSearchValue } from "../../config/config";
import { useEffect, useState } from "react";
import getData from "../../api/getData";
import Actor from "./Actor";
import ShowMore from "../ShowMore";

Actors.propTypes = {
    moveId: PropTypes.number.isRequired,
};

function Actors({ moveId }) {
    const [actorList, setActorList] = useState([]);
    const [countShowActors, setCountShowActors] = useState(10);

    useEffect(
        () => {
            async function getActors() {
                const data = await getData(actorsUrl.replace(moveIdSearchValue, moveId));

                if (Array.isArray(data.cast) && data.cast.length) {
                    setActorList(data.cast.filter(
                        (actor) => actor.profile_path
                    ));
                }
            }
            getActors();
        },
        [moveId]
    );

    return (
        <div className="bg-gray-900/80 mt-5 p-10 rounded">
            <h3 className="text-2xl mb-5 font-bold">Actors:</h3>

            <ShowMore
                list={actorList}
                onChengeShow={() => { setCountShowActors(countShowActors + 10); }}
                textBtn="Show more actors"
                countShow={countShowActors}
            >
                <div className="flex flex-wrap justify-between gap-5 after:flex-grow after:min-w-[150px]">
                    {
                        actorList.slice(0, countShowActors).map(
                            (actor) => <Actor key={actor.id} actor={actor} />
                        )
                    }
                </div>
            </ShowMore>
        </div>
    );
}

export default Actors;
