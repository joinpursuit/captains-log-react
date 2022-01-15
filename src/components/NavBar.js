import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <button>
          <h2>Home</h2>
        </button>
      </Link>
      <Link to="/logs">
        <button>
          <h2>All Logs</h2>
        </button>
      </Link>
      <Link to="new">
        <button>
          <h2>Add Logs</h2>
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
