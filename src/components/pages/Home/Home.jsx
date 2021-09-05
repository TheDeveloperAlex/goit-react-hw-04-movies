import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { SerchTrends, posterImg } from '../../../Api/Api';
import s from './Home.module.css';

const Home = () => {
    const [films, setFilms] = useState([]);
    
    const location = useLocation();
    const { url } = useRouteMatch();
    

    useEffect(() => {
        if (SerchTrends()) {
            SerchTrends().then(films => setFilms([...films])) 
        }
    }, [])



    

    

    return (
        <div>
            <div className={s.center}>
                <h2 className={s.title}>Trends</h2>
            </div>
            
            <div>
                <ul className={s.list}>
                    {films.map(film => (
                        <li key={film.id} className={s.listItem}>
                            
                            <Link className={s.Link} to={{
                                pathname: `${url}movies/${film.id}`,
                                state: {from: location}
                            }}>
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