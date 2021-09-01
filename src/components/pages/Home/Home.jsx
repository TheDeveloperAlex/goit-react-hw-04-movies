import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SerchTrends } from '../../../Api/Api';
import s from './Home.module.css';

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        if (SerchTrends()) {
            SerchTrends().then(films => setFilms(prevfilms => [...prevfilms, ...films])) 
        }
    }, [])

    console.log(films);

    return (
        <div>
            <h2 className={s.title}>Trends</h2>
            <div>
                <ul className={s.list}>
                    {films.map(film => (
                        <li key={film.id} className={s.listItem}>
                            <Link>
                                <img src={film.poster_path} alt="" />
                                {film.title || film.name}
                            </Link>
                        </li>
                      ))}  
                </ul>
            </div>
        </div>
    );
}

export default Home;