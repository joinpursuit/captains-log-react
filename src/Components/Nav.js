import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <h1>
                <Link to="/logs">Captain's Log</Link>
            </h1>
            <button>
                <Link to="/logs/new">NEW LOG</Link>
            </button>
        </nav>
    )
}

export default Nav