import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <nav>
                <h1>
                    <Link to ="/logs">Logs</Link>
                </h1>
                <button>
                    <Link to ="/logs/new">New Logs</Link>
                </button>
            </nav>
        </div>
    )
}

export default NavBar;