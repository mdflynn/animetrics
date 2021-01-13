export const getSeasons = () => {
    return fetch('https://api.jikan.moe/v3/search/anime?q=myheroacademia')
                .then(response => response.json())
}