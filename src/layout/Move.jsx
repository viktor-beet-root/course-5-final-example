import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../api/getData";
import { originalImagesUrl, urlMove } from "../config/config";
import Actors from "../components/actors/Actors";
import useUrl from "../hooks/useUrl";
import SocialNetworksList from "../components/socialNetworks/SocialNetworksList";
import VideosMain from "../components/videos/VideosMain";

function getFormattedNumber(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
function getRuntime(numberMinutes) {
    const hourses = ~~(numberMinutes / 60);
    const minutes = numberMinutes % 60;

    return `${hourses}h ${minutes < 10 ? '0' + minutes : minutes}m`;
}

function Move() {
    const params = useParams();

    const [url] = useUrl(`${urlMove}/${params.id}`, { language: "en-US" });

    const [move, setMove] = useState(null);
    const genres = move?.genres;

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
    console.log(move);
    return (
        <>
            <div className="py-36 bg-cover" style={{ backgroundImage: `url(${originalImagesUrl + move.backdrop_path})` }}>
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-[320px__minmax(320px,_calc(100%-360px))] gap-5 bg-gray-900/80 p-5 rounded">
                        <img className="w-[350px]" src={`${originalImagesUrl}${move.poster_path}`} alt={move.title} />
                        <div className="max-w-full">
                            <h1 className="w-full text-3xl text-center font-bold mb-2">
                                {move.title}
                                <span className="text-2xl align-text-top text-orange-600">
                                    {
                                        Number(move.vote_average).toFixed(2)
                                    }
                                </span>
                            </h1>
                            {
                                move.tagline && <p className="mb-5 bg-slate-900 p-2 text-center text-2xl">{move.tagline}</p>
                            }
                            <p className="mb-5 text-2xl">
                                <span className="text-orange-600 font-bold">Genres: </span>
                                {
                                    genres && genres.map(
                                        (genre, index) => <span key={genre.id}>
                                            {genre.name}{(index !== genres.length - 1) ? ', ' : ''}
                                        </span>
                                    )
                                }
                            </p>
                            <p className="mb-5">{move.overview}</p>
                            <p className="text-center">
                                <span>Budget:</span> {getFormattedNumber(move.budget)}
                                <span className="inline-block ml-5 pl-5 border-l"> Revenue:</span> {getFormattedNumber(move.revenue)}
                                <span className="inline-block ml-5 pl-5 border-l">Runtime:</span> {getRuntime(move.runtime)}
                            </p>
                            <SocialNetworksList moveId={move.id} />
                        </div>
                    </div>
                    <Actors moveId={move.id} />
                </div>
            </div>
            <VideosMain moveId={move.id} />
        </>
    );
}

export { Move as Component };

export default Move;
