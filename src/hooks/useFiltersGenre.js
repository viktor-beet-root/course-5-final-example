import { useEffect, useState } from 'react';
import { genreDefaultUrl } from '../config/config';
import useUrl from './useUrl';
import getData from '../api/getData';

const deafaultGenresParams = {
    language: 'en-US',
};

export default function useFiltersGenre() {
    const [genreUrl] = useUrl(genreDefaultUrl, deafaultGenresParams);
    const [filterListOption, seFilterListOption] = useState([]);
    const checkedGenreListId = filterListOption.filter((genre) => genre.checked).map((genre) => genre.id).join('|');
    const filterName = 'genre';
    const filterTitle = 'Generes';

    useEffect(() => {
        async function getGenres() {
            const data = await getData(genreUrl);

            if (data.genres) {
                seFilterListOption([
                    ...data.genres
                ].map((genre) => {
                    genre.checked = false;
                    return genre;
                }));
            }
        }

        getGenres();
    }, [genreUrl]);

    function hendleChengeGenreFilter(id, nameFilter, isChecked) {
        if (nameFilter === filterName) {
            seFilterListOption((currentValue) => {
                const newValue = currentValue.map(
                    (genre) => (genre.id === id && genre.checked !== isChecked) ? { ...genre, checked: isChecked } : genre
                );

                return newValue;
            });
        }
    }

    return [
        {
            filterType: 'check',
            filterListOption,
            filterName,
            filterTitle
        },
        checkedGenreListId,
        hendleChengeGenreFilter
    ];
}
