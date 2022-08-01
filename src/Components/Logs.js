import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Log from "./Log";
import { useNavigate } from "react-router";

const API = process.env.REACT_APP_API_URL;
//console.log(API);

export default function Logs() {
	const [logs, setLogs] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`${API}/logs`)
			.then((response) => {
				// console.log("successfully called GET on API");
				// console.log(response);
				setLogs(response.data);
			})
			.catch((error) => {
				console.log(error);
				navigate("/error");
			});
	}, [navigate, logs]);

	return (
		<div>
			{logs.map((log) => {
				return <Log logInfo={log} />;
			})}
		</div>
	);
}
