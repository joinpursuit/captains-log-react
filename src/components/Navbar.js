import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/logs" className="links">Captain's Log</Link>
            <button>
                <Link to="/logs/new" className="links">New Log</Link>
            </button>
        </nav>
    )
}

