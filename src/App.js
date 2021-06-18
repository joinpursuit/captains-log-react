// DEPENDENCIES
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

const API = apiURL();

function App() {
	const [logs, setLogs] = useState([]);

	const addNewLog = async (newLog) => {
		try {
			const res = await axios.post(`${API}/logs`, newLog);
			setLogs((prevLogs) => [...prevLogs, res.data]);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteLog = async (index) => {
		try {
			await axios.delete(`${API}/logs/${index}`);
			const deletedIndex = [...logs];
			deletedIndex.splice(index, 1);
			setLogs(deletedIndex);
		} catch (err) {
			console.log(err);
		}
	};

	const updateLog = async (updatedLog, index) => {
		try {
			await axios.put(`${API}/logs/${index}`, updatedLog);
			const newLog = [...logs];
			newLog[index] = updatedLog;
			setLogs(newLog);
		} catch (err) {
			console.log(err);
		}
	};

	const fecthLogs = async () => {
		try {
			let res = await axios.get(`${API}/logs`);
			setLogs(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fecthLogs();
	}, []);

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/logs">
						<Index logs={logs} />
					</Route>
					<Route path="/logs/new">
						<New addNewLog={addNewLog} />
					</Route>
					<Route exact path="/logs/:index">
						<Show deleteLog={deleteLog} />
					</Route>
					<Route path="/logs/:index/edit">
						<Edit updateLog={updateLog} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
