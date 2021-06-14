import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <h1>
                <Link to="/Captian">Captian's Log</Link>
            </h1>
            {" "}
            <h1>
                <Link to="/Index">Index</Link>
            </h1>
        </div>
    )
}
