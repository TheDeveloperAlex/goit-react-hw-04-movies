import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css';
import { useLocation } from 'react-router-dom';



const Navigation = () => {
    const location = useLocation();
    return (
        <header >
            <nav className={s.nav }>
                <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>Home</NavLink>
                <NavLink to="/movies" exact className={s.link} activeClassName={s.activeLink}>Movies</NavLink>
            </nav>
        </header>
    );
}

export default Navigation;