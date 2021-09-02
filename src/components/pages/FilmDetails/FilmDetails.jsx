import { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom'
import { AllInfo } from '../../../Api/Api';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import Rewies from './Rewies/Rewies';
import s from './FilmDetails.module.css';

const FilmDetails = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const { url } = useRouteMatch();

    // console.log(url);

    useEffect(() => {
        AllInfo(filmId).then(res => (setFilm(res)));
       
    }, [filmId])

    // console.log(film);

    return (
        <>
            <div className={s.section}>
                {film &&
                    <>
                        
                    <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="" className={s.poster} />
                    <div className={s.info}>
                        <h1 className={s.title}>{film.original_title}</h1>
                            <div>
                            <p className={s.score}>User score: <span>{film.vote_average}</span></p>
                            </div>
                            <div className={s.genersDiv}>
                                <h2>Geners</h2>
                                <ul>
                                    { film.genres.map(item => (
                                        <li key={item.id}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2>Overview</h2>
                                <p>{ film.overview}</p>
                            </div>
                            
                        </div>
                    </>
                }
            </div>

            <div>
                <p className={s.paragraph}>Idditional information</p>
                <ul className={s.list}>
                    <li>
                        <NavLink to={`${url}/cast`} className={s.cast}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/rewies`} className={s.rewies}>Rewies</NavLink>
                    </li>
                </ul>
            </div>

            <Route path="/movies/:filmId/cast">
                <Cast id={filmId}/>
            </Route>
            <Route path="/movies/:filmId/rewies">
                <Rewies id={filmId}/>
            </Route>
            
            

            
        </>
    );
}

export default FilmDetails;