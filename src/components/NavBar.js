import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/logs" className="btn btn-primary">
                Logs
            </Link>
            <Link to="/logs/new" className="btn btn-primary">
                Logs New
            </Link>
            
        </div>
    );
};

export default NavBar;