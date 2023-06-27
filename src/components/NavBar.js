import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Pokedex</NavLink>
            <NavLink to="/team-builder">Team Builder</NavLink>
            <NavLink to="/saved-teams">Saved Teams</NavLink>
        </nav>
    )
}

export default NavBar;