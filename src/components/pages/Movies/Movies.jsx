import { useState } from 'react';
import s from './Movies.module.css';
import { SerchQuery } from '../../../Api/Api';
import { Link } from 'react-router-dom';


const Movies = () => {
    const [query, setQuery] = useState('');
    const [listFilms, setListFilms] = useState(null);

     const onHandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
      if (query.trim() === "") {
          alert('Please enter your query');
    //   toast.error("Error, please enter text ");
      return;
      }
      
      SerchQuery(query)
          .then(res => res.results)
          .then(res => (
          setListFilms(res)
      ));
    document.getElementById("input").value = "";
    setQuery("");
    };
    
    // console.log(listFilms);

    return (
        <div className={s.mainDiv}>
            <div>
                {/* <h2>Movies</h2> */}
                <form className={s.SearchForm} onSubmit={onHandleSubmit}>
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        onChange={onHandleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        id="input"
                    />
                    <button type="submit" className={s.SearchFormButton}>
                        {/* <span className={s.SearchFormButtonLabel}>Search</span> */}
                    </button>
                </form>
            </div>
            <div>
                <ul className={s.list}>
                    {listFilms && listFilms.map(film => (
                        <li key={film.id} className={s.listItem}>

                            <Link to={`/movies/${film.id}`}>
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
        </div>
    );
}

export default Movies;