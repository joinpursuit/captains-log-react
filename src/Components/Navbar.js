import { NavLink } from "react-router-dom";
import Logs from "./Logs";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/logs">Bookmarks</NavLink>
      <button>
        <NavLink to="/logs/new">New Bookmark</NavLink>
      </button>
    </nav>
  );
}
