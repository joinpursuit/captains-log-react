import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import NewLogForm from "./Components/NewLogForm";
import Error from "./Components/Error";
import Log from "./Components/Log";

export default function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logs" element={<Logs />} />
				<Route path="/logs/:id" element={<Log />} />
				<Route path="/logs/new" element={<NewLogForm />} />
				<Route path="/error" element={<Error />} />
			</Routes>
		</div>
	);
}
