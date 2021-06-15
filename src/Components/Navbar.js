import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="NavBar">
      <NavLink to="/logs">Logs</NavLink>
      <NavLink to="/logs/new">New Log</NavLink>
      <NavLink to="/logs/:index">Index</NavLink>
    </nav>
  );
}
