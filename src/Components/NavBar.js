import { Link } from "react-router-dom";

import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <Link to="/logs">
        <h1>Captain's Log</h1>
      </Link>
      <Link to="/logs/new">
        <button>New Log</button>
      </Link>
    </nav>
  );
}

export default NavBar;