import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/logs">Captain's Logs</Link>
            </h1>

            <button>
                <Link to="/logs/new">Make a New Log</Link>
            </button>
        </nav>
    );
}