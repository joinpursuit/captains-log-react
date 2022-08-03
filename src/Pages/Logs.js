import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Log from "../Components/Log";
import { useNavigate } from "react-router";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
	const [logs, setLogs] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`${API}/logs`)
			.then((response) => {
				setLogs(response.data);
			})
			.catch((error) => {
				console.log(error);
				navigate("/error");
			});
	}, []);

	return (
		<div className="Logs">
			<table>
				<thead>
					<tr>
						<th>Captain Name</th>
						<th>Mistakes</th>
					</tr>
				</thead>
				<tbody>
					{logs.map((log, index) => {
						return <Log API={API} key={index} id={index} logInfo={log} />;
					})}
				</tbody>
			</table>
		</div>
	);
}
