import { useState, useEffect } from 'react';
import { CastActors } from '../../../../Api/Api';
import s from './Cast.module.css';
import { useLocation } from 'react-router-dom';


const Cast = ({ id }) => {
    const [actors, setActors] = useState([]);
    const location = useLocation();

    

    useEffect(() => {
        CastActors(id).then(res => (res.cast)).then(res => (setActors(res)));;
    }, [])

    

    return (
        <div className={s.wraper}>
            <h1 className={s.Title}>Actors</h1>
            <ul className={s.list}>
                {actors && actors.map(actor => (
                    <li key={actor.id} className={s.listItem}>
                        <img src={'https://image.tmdb.org/t/p/w500' + actor.profile_path} alt={actor.original_name} className={s.photo} />
                        <p>Name: {actor.original_name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default Cast;