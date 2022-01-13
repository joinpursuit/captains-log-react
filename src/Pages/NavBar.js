import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
        <h1>
          <Link to="/">Captain's Log</Link>
        </h1>
        <Link to="/logs"> All Logs</Link>
        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </nav>
    );
  }