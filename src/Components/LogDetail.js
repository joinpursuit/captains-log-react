import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const LogDetail = (deleteLog) => {
	const [log, setLog] = useState({});
	let { index } = useParams();
	let history = useHistory();

	const fetchLog = async () => {
		try {
			const res = await axios.get(`${API}/logs/${index}`);
			setLog(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const {
		captainName,
		title,
		post,
		mistakesWereMadeToday,
		daysSinceLastCrisis,
	} = log;

	useEffect(() => {
		fetchLog();
	}, []);

	const handleDelete = () => {
		deleteLog(index);
		history.push("/logs");
	};

	return (
		<div>
			<h1>Captain's Log Show</h1>
			<p>Name: {captainName}</p>
			<p>
				Title: {title} - By {captainName}
			</p>
			<p>Post: {post}</p>
			<p>Mistakes Were Made Today: {`${mistakesWereMadeToday}`}</p>
			<p>Days since last crisis: {daysSinceLastCrisis}</p>
			<Link to={`/logs`}>
				<button>Back</button>
			</Link>
			<Link to={`/logs/${index}/edit`}>
				<button>Edit</button>
			</Link>
			<Link to={`/logs/new`}>
				<button>Create</button>
			</Link>
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default withRouter(LogDetail);
