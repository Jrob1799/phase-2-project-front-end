import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Pokedex</Link></li>
                <li><Link to="/team-builder">Team Builder</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;