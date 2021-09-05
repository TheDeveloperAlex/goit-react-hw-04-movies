import { useState,useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { AllInfo } from '../../../Api/Api';
import { NavLink, useRouteMatch, Route, Switch } from 'react-router-dom';
import Cast from './Cast/Cast';
import Rewies from './Rewies/Rewies';
import s from './FilmDetails.module.css';

const FilmDetails = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [from, setFrom] = useState({});
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();


    
    const onClickBack = () => {
        if (location.pathname === `/movies/${filmId}/cast` || location.pathname === `/movies/${filmId}/rewies`) {
            history.push(from);
        }
        else {
            history.push(location.state.from);
        }
        
    }

    useEffect(() => {
        setFrom(location.state.from);
    }, [])
    

    useEffect(() => {
        AllInfo(filmId).then(res => (setFilm(res)));
       
    }, [filmId])

    

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
                <button type="button" className={s.button} onClick={onClickBack}>Go back</button>
            </div>

            <div>
                <p className={s.paragraph}>Idditional information</p>
                <ul className={s.list}>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/cast`,
                            state: {from: location }
                        }} className={s.cast}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/rewies`,
                            state: {from: location}
                        }} className={s.rewies}>Rewies</NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/movies/:filmId/cast">
                    <Cast id={filmId}/>
                </Route>
                <Route path="/movies/:filmId/rewies">
                    <Rewies id={filmId}/>
                </Route>
            </Switch>
            
            
            

            
        </>
    );
}

export default FilmDetails;