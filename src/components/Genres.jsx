import PropTypes from "prop-types";

Genres.propTypes = {
    genre_ids: PropTypes.array.isRequired,
    genreHasheList: PropTypes.object.isRequired,
};

function Genres({ genre_ids, genreHasheList }) {
    const genreLength = genre_ids.length - 1;

    return (
        <>
            {
                genre_ids.map(
                    (genreId, index) => (genreHasheList[genreId] + (genreLength !== index ? ', ' : '.'))
                )
            }
        </>
    );
}

export default Genres;
