import { Link } from "react-router-dom";

export default function FootBar() {
    return (
        <footer>
            <h1>
                <Link to="/logs">Captain's Logs</Link>
            </h1>

            <h3>Developed By Hafiz Ali</h3>
        </footer>
    );
}