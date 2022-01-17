import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components /NavBar";

//PAGES
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOfFour";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/logs" element={<Index />} />
					<Route path="/logs/:index" element={<Show />} />
					<Route path="/logs/:index/edit" element={<Edit />} />
					<Route path="logs/new" element={<New />} />
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
