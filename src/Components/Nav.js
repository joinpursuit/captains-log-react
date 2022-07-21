import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <h2 className="captainLog">
          <Link className="captainLog" to="/logs">
            Captain's Log
          </Link>
        </h2>
      </div>
      <div>
        <h2 className="newLog">
          <Link className="captainLog" to="/logs/new">
            New Log
          </Link>
        </h2>
      </div>
    </nav>
  );
}

export default Nav;
