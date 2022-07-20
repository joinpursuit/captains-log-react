import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
         <nav>
            <h1>
                <Link className="log-list" to="/logs">Logs</Link>
            </h1>
            <h1>
                <Link className="new-log-form" to="/logs/new">New Log</Link>
            </h1>
         </nav>
        )
    }
}

export default NavBar