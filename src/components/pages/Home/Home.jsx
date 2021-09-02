import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { SerchTrends, posterImg } from '../../../Api/Api';
import s from './Home.module.css';

const Home = () => {
    const [films, setFilms] = useState([]);
    // const [posters, setPosters] = useState([]);
    const { url } = useRouteMatch();
    // console.log(url);

    useEffect(() => {
        if (SerchTrends()) {
            SerchTrends().then(films => setFilms([...films])) 
        }
    }, [])



    console.log(films);

    // films.map(film => (
    //     // setPosters(prev => ([...prev, ]))
    //     console.log(film.poster_path)
    // ))

    // films.map(film => (setPosters([ film.poster_path])));
        

    // console.log(posters);

    return (
        <div>
            <div className={s.center}>
                <h2 className={s.title}>Trends</h2>
            </div>
            
            <div>
                <ul className={s.list}>
                    {films.map(film => (
                        <li key={film.id} className={s.listItem}>
                            
                                <Link className={s.Link} to={`${url}movies/${film.id}`}>
                                    <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="" className={s.img} />
                                    <p className={s.filmTitle}>{film.title || film.name}</p> 
                                        
                                <div className={s.wraper}> <p className={s.vote}>{film.vote_average}</p></div>
                                </Link>
                            
                            
                        </li>
                      ))}  
                </ul>
            </div>
        </div>
    );
}

export default Home;