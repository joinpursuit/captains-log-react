import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <h1>
                <Link to="/logs">Captian's Log</Link>
            </h1>
        
            <h1>
                <Link to="/logs/new">Index</Link>
            </h1>
        </div>
    )
}
