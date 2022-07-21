import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <h1>
        <Link to="/logs/new">New</Link>
      </h1>
    </nav>
  );
}
