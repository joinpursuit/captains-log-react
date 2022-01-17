import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
	// creating a state
	const [log, SetLog] = useState([]);
	let { index } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/logs/${index}`)
			.then((res) => {
				SetLog(res.data);
			})
			.catch(() => {
				navigate("/not-found");
			});
	}, []);
	const handleDelete = () => {
		axios
			.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
			.then(() => {
				navigate("/logs");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>
				{log.title} - By {log.captainName}
			</h1>
			<div>{log.post}</div>
			<div> Days since last crisis: {log.daysSinceLastCrisis}</div>
			<div>
				<Link to={`/logs/${index}/edit`}>
					<button>Edit</button>
				</Link>
			</div>
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}

// "Courage - By Picard"
// "Days since last crisis: 100"
export default LogDetails;
