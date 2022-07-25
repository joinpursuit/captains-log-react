import { Link } from "react-router-dom";

import "./Styles/Navbar.css";

export default function NavBar() {
  return (
    <header>
      <h1>Captain's Log</h1>
      <nav>
        <Link to="/logs">Logs</Link>
        <Link to="/logs/new">New Log</Link>
      </nav>
    </header>
  );
}