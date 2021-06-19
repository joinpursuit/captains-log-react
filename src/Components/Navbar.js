import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to="/">Home
        
      </Link>
      {" "}
      <Link to="/logs">Logs
    
      </Link>{" "}
      <Link to="/logs/new">Logs/new
    
      </Link>
    </nav>
  );
}

export default Navbar;
