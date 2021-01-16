export const fetchSeasons = (criteria) => {
    return fetch(`https://api.jikan.moe/v3/anime/${criteria}/episodes`)
                .then(response => response.json())
};

export const fetchMovies = () => {
    return fetch('https://api.jikan.moe/v3/search/anime?q=myheroacademia')
                .then(response => response.json())
}