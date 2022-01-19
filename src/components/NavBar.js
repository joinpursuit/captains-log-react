import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/logs">Captain's Logs</Link>
      </h1>
      <h4>
        <Link to="/logs/new" id="link-to-new">
          New Log
        </Link>
      </h4>
    </nav>
  );
};

export default NavBar;
