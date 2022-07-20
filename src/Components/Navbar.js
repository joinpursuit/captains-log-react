import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/logs" className="navlogs">Captain's Log</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}

export default Navbar;