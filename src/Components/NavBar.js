import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav>
      <button className="nav-bar-buttons">
        <Link to="/logs">Logs</Link>
      </button>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
      </nav>
  );
}

export default NavBar;