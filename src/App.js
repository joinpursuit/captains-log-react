import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components /NavBar";
import Logs from "./Components /Logs";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/logs" element={<Logs />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
