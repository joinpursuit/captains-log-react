import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <h1>Captain's Log</h1>
           
            <Link to="/logs" className="btn btn-primary">
                Logs
            </Link>
            <Link to="/logs/new" className="btn btn-primary">
                New Log
            </Link>
            
        </div>
        </nav>
    );
};

export default NavBar;