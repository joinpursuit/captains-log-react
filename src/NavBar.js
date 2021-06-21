import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>Captain's Log</h1>
      <h3>Show</h3>
      <button>
        <Link to="/logs">Logs</Link>
      </button>

      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}
