import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navBar">
            <Link to="/logs">Captain's Log</Link>
            {/* <Link to="/logs">Logs</Link> */}
            <Link to="/logs/new"> New Log</Link>
        </nav>
    )
}

export default NavBar;