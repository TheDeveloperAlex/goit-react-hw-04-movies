import s from './ResultsSearch.module.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ResultsSearch = ({ listFilms }) => {
    const location = useLocation();
    return (
        <div>
                <ul className={s.list}>
                    {listFilms && listFilms.map(film => (
                        <li key={film.id} className={s.listItem}>

                            <Link to={{
                                pathname: `/movies/${film.id}`,
                                state: {from: location},
                            }}>
                                <img className={s.img} src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="" />
                                <div className={s.center}>
                                    <p className={s.filmTitle}>{film.title}</p>
                                </div>
                                
                                <div className={s.wraper}> <p className={s.vote}>{film.vote_average}</p></div>
                            </Link>
                            
                        </li>
                    ))}
                    {listFilms && !listFilms.length && (<h2>No film with that title</h2>) }
                </ul>
        </div>
    );
}

export default ResultsSearch;