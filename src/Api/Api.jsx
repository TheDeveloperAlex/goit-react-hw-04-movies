const KEY = '0f844bf4049093ba276ddbb3d9ab7940';
const SEARCH = 'https://api.themoviedb.org/3/';


export const SerchTrends = () => {
     return fetch(
        `${SEARCH}trending/movie/week?api_key=${KEY}`
    ).then(res => res.json()).then(res => res.results).then(res => (res));
       
}

export const SerchQuery = (query) => {
    return fetch(`${SEARCH}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(res => (res));
}

export const AllInfo = (filmId) => {
    return fetch(`${SEARCH}movie/${filmId}?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => (res))
}

export const CastActors = (filmId) => {
    return fetch(
        `${SEARCH}movie/${filmId}/credits?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => (res))
}

export const RewiesApi = ( filmId ) => {
    return fetch(`${SEARCH}movie/${filmId}/reviews?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => (res))
}   

