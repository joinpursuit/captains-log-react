import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1>
        <Link to="/logs">All Logs</Link>
      </h1>
      <Link to="/logs/new">New Log</Link>
    </nav>
  );
};

export default NavBar;
