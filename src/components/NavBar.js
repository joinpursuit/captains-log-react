import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1><Link className="logs-link" to="/logs">All Logs</Link></h1>
      <button className="new-log-btn">
      <Link className="logs-link" to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
};

export default NavBar;
