import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/logs">
        <h1>Captain's Log</h1>
      </Link>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </div>
  );
}

export default NavBar;
