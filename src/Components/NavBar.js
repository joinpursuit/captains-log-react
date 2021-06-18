import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<Link exact to="/">
				HOME
			</Link>

			<Link to="/logs">Logs</Link>

			<button>
				<Link to="/logs/new">New Log</Link>
			</button>
		</nav>
	);
}
