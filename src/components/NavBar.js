import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/logs">
        <h1>Captain's Logs</h1>
      </Link>
      <Link to="/logs/new">
        <h2>NEW LOG</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
