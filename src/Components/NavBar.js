import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      <button>
        <Link to="/log/new">New Log</Link>
      </button>
    </nav>
  );
}
