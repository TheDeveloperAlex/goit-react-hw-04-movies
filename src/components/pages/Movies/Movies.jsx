import { useState, useEffect } from 'react';
import s from './Movies.module.css';
import { SerchQuery } from '../../../Api/Api';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ResultsSearch from './ResultsSearch/ResultsSearch';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [listFilms, setListFilms] = useState(null);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {

        
        if (location.search) {
            const secondQuery = location.search.slice(7);
            SerchQuery(secondQuery)
          .then(res => res.results)
          .then(res => (
          setListFilms(res)
      ));
        }
    }, [])

     const onHandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
      if (query.trim() === "") {
          alert('Please enter your query');
    
      return;
      }
      
      history.push({
          ...location,
          search: `query=${query}`
      })

      SerchQuery(query)
          .then(res => res.results)
          .then(res => (
          setListFilms(res)
          ));
    
    };
    
   

    return (
        <div className={s.mainDiv}>
            <div>
                
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
                        
                    </button>
                </form>
            </div>
            <ResultsSearch listFilms={listFilms} />
        </div>
    );
}

export default Movies;