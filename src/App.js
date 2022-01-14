import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logs from "./Components /logs";

function App() {
	return (
		<div>
			<BrowserRouter>
				<nav>
					<h1>
						<Link to="/logs">Captain's Log</Link>
					</h1>
					<button>
						<Link to="/logs/new">New Log</Link>
					</button>
				</nav>
				<Routes>
					<Route></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
