import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <h4>
                <Link to="/logs">Logs</Link>
            </h4>
            <h4>
                <Link to="/logs/new">New Log</Link>
            </h4>
        </nav>
    )
}

export default NavBar;