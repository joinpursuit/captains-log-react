import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header className="LogHeader">
      <nav>
        <ul>
          <li>
            <Link to="/logs" className="NavLink">
              Logs
            </Link>
          </li>
          <li>
            <Link to="/logs/new" className="NavLink">
              New Log
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
