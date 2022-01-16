import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/logs">All Logs</Link>
      <Link to="/logs/new">New Log</Link>
    </nav>
  );
};

export default NavBar;
