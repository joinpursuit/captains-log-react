import { Link } from "react-router-dom";

export default function NavBar() {
return (
<nav>
    {/* <h1>
    <Link to="/bookmarks">Bookmarks</Link>
    </h1> */}
    <button>
    <Link to="/logs">Captain Log</Link>
    </button>
    <button>
    <a href="/logs/new">New Log</a>
    </button>
</nav>
);
}