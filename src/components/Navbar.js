import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
  return (
    <nav>
      <h1>
        <Link to="/">Captains Log</Link>
        </h1>
        <h1>
        <Link to="/logs/new">New Bookmark</Link>
      </h1>
      
    </nav>
  );
}
}

export default NavBar