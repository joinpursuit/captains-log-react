import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/logs">Logs</Link>
            <Link to="/logs/new">New</Link>
        </nav>
    )
}

export default NavBar;