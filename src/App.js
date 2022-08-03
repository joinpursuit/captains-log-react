import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Logs from "./Pages/Logs";
import NewLogForm from "./Pages/NewLogForm";
import Error from "./Components/Error";
import ShowLog from "./Pages/ShowLog";
import EditLogForm from "./Pages/EditLogForm";

export default function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logs/:id" element={<ShowLog />} />
				<Route path="/logs/new" element={<NewLogForm />} />
				<Route path="/logs/:id/edit" element={<EditLogForm />} />
				<Route path="/logs" element={<Logs />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}
