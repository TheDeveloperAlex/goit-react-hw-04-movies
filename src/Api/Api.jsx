const KEY = '0f844bf4049093ba276ddbb3d9ab7940';

// https://image.tmdb.org/t/p/w500${movie.poster_path}

// Заготовка
// export const = () => {
//     return fetch('').then(res => res.json()).then(res => console.log(res))
// }

export const SerchTrends = () => {
     return fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
    ).then(res => res.json()).then(res => res.results).then(res => (res));
        // .then(res => { return res });
}

export const SerchQuery = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(res => (res));
}

export const AllInfo = (filmId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => (res))
}

export const CastActors = (filmId) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => (res))
}

export const RewiesApi = ( filmId ) => {
    return fetch(`https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => (res))
}   

// export const posterImg = ({ posterPath }) => {
//     return fetch(`https://image.tmdb.org/t/p/w500${posterPath}`).then(res => res.json())
//         .then(res => res.url)
//         .then(res => {
//         return res;
//     })
// }
// res.url