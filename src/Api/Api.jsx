const KEY = '0f844bf4049093ba276ddbb3d9ab7940';

// Заготовка
// export const = () => {
//     return fetch('').then(res => res.json()).then(res => console.log(res))
// }

export const SerchTrends = () => {
     return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    ).then(res => res.json()).then(res => res.results).then(res => (res));
        // .then(res => { return res });
}

export const SerchQuery = (query) => {
    return fetch('').then(res => res.json()).then(res => console.log(res));
}

export const AllInfo = () => {
    return fetch('').then(res => res.json()).then(res => console.log(res))
}