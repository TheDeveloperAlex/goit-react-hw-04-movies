import { useState, useEffect } from 'react';
import { RewiesApi } from '../../../../Api/Api';
import s from './Rewies.module.css';

const Rewies = ({ id }) => {
    const [rewies, setRewies] = useState(null);

    useEffect(() => {
        RewiesApi(id).then(res => (res.results)).then(res => setRewies(res))
    }, [])

    console.log(rewies);

    return (
        <div className={s.wraper}>
            <h1 className={s.Title}>Rewies</h1>
            {rewies && rewies.map(item => (
                <div className={s.div}>
                    {/* <img src={'https://image.tmdb.org/t/p/w500' + item.author_details.avatar_path} alt="" /> */}
                    <h3 className={s.name}>{item.author}</h3>
                    <p className={s.coment}>{item.content}</p>
                </div>
                
            ))}
            {rewies && !rewies.length && (<h3 className={s.noResultTitle}>No Rewies</h3>)}

        </div>
    );
}

export default Rewies;