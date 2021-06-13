import { NavLink } from "react-router-dom";
import Logs from "./Logs";

export default function Navbar() {
  return (
    <nav className="NavBar">
      <NavLink to="/logs">Logs</NavLink>
      <p>_____</p>
      <NavLink to="/logs/new">Logs New</NavLink>
      <p>___</p>
      <NavLink to="/logs/:index">Index</NavLink>
    </nav>
  );
}
