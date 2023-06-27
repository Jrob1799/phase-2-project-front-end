import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Pokedex</NavLink>
            <NavLink to="/team-builder">Team Builder</NavLink>
        </nav>
    )
}

export default NavBar;