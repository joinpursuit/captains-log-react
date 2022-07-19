import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <Link to="/">Captain's Log</Link>
      </div>
      <div>
        <Link to="/logs">NEW LOG</Link>
      </div>
    </nav>
  );
}

export default Nav;
