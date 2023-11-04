import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../api/getData";
import { originalImagesUrl, urlMove } from "../config/config";

function Move() {
    const params = useParams();

    const url = `${urlMove}/${params.id}?language=en-US`;

    const [move, setMove] = useState({});

    useEffect(
        () => {
            async function getMove() {
                const data = await getData(url);

                if (!data) return;

                setMove(data);
            }

            getMove();
        },
        [url]
    );

    if (!move) return <p>Loading...</p>;

    return (
        <>
            <h1>{move.title}</h1>
            <img src={`${originalImagesUrl}${move.backdrop_path}`} alt={move.title} />
            <p>{params.id}</p>
        </>

    );
}

export { Move as Component };

export default Move;
