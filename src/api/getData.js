import appLocalStorage from "./appLocalStorage";
console.log(import.meta.env);
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2FkZTA3NjRkYzkzOTBhYjQ2Zjk5MWI1M2RiMzdjOCIsInN1YiI6IjVmYWJhY2VmNjNkNzEzMDA0MDk5NGJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8gr7yQ2C7Iqb3o9dr88QVbY3Yq_J-vmcXyz5-qbZ0o';
const BASE_URL = 'https://api.themoviedb.org/3';

const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
};

async function getData(url, options) {
    const chashData = appLocalStorage(url);

    if (chashData) return chashData;

    options = {
        ...OPTIONS,
        ...options
    };

    const response = await fetch(BASE_URL + decodeURIComponent(url), options);
    const data = await response.json();

    if (!data.errors) appLocalStorage(url, data);

    return data;
}

export default getData;
