import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function ShowLog() {
	const { id } = useParams();
	const [log, setLog] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`${API}/logs/${id}`)
			.then((response) => {
				setLog(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const deleteThisLog = () => {
		axios
			.delete(`${API}/logs/${id}`)
			.then(() => {
				navigate("/logs");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h2>
				{log.title} - By {log.captainName}
			</h2>
			<p>{log.post}</p>
			<p>{log.mistakesWereMadeToday && "Mistakes were made today..."}</p>
			<p>Days since last crisis: {log.daysSinceLastCrisis}</p>
			<Link to="/logs">
				<button>Back</button>
			</Link>
			<button onClick={deleteThisLog}>Delete</button>
			<Link to={`/logs/${id}/edit`}>
				<button>Edit</button>
			</Link>
		</div>
	);
}
