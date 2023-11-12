// image url
export const imagesUrl = 'https://image.tmdb.org/t/p/w500';
export const originalImagesUrl = 'https://image.tmdb.org/t/p/original';
export const noImagePath = '/image/no-img.svg';

// api url
export const urlMoves = '/discover/movie';
export const searchMovieUrl = '/search/movie';
export const languageUrl = '/configuration/languages';
//local url
export const searchUrl = '/search';
export const urlMove = '/movie';

//language localStore key
export const languageLocalStoreKey = 'moveLang';
export const defaultLanguage = 'en-US';

export const inputStyle = {
    input: {
        color: "#fff",
        background: "#374151"
    },
    label: {
        color: "#fff",
    }
};

export const sortData = [
    { value: "popularity", label: "Popularity" },
    { value: "vote_average", label: "Rating" },
    { value: "primary_release_date", label: "Release Date", },
    { value: "original_title", label: "Title" },
];

export const sortDirection = {
    desc: 'desc',
    asc: 'asc',
};
