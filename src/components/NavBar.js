import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to="/logs">Logs</Link>{" "}
            <Link to="/logs/new">New Log</Link>
        </div>
    )
}
