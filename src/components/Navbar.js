import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
  return (
    <nav className="Navbar">
      <h3>
        <Link to="/logs">Captains Log</Link>
        </h3>
        <h3>
        <Link to="/logs/new">New Log</Link>
      </h3>
      
    </nav>
  );
}
}

export default NavBar