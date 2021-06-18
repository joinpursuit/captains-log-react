import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/logs">Captain's Log</NavLink> {" "}
            <NavLink to="/logs/new">Add New Log</NavLink>
        </nav>
    )
}

export default NavBar;