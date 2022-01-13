import { Link } from "react-router-dom";

export default function NavBar() {
return (
<nav>
    {/* <h1>
    <Link to="/bookmarks">Bookmarks</Link>
    </h1> */}
    <button>
    <Link to="/bookmarks/new">Captain Log</Link>
    </button>
</nav>
);
}
