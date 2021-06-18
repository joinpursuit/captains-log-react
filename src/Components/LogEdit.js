import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const LogEdit = (props) => {
	let { index } = useParams();
	let history = useHistory();

	const [log, setLog] = useState({
		captainName: "",
		title: "",
		post: "",
		mistakesWereMadeToday: false,
		daysSinceLastCrisis: 0,
	});

	const handleTextChange = (e) => {
		setLog({ ...log, [e.target.id]: e.target.value });
	};

	const handleCheckBox = () => {
		setLog({
			...log,
			mistakesWereMadeToday: !log.mistakesWereMadeToday,
		});
	};

	const fetchLog = async () => {
		try {
			const res = await axios.get(`${API}/logs/${index}`);
			setLog(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchLog();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.updateLog(log, index);
		history.push(`/logs/${index}`);
	};

	return (
		<div>
			<h1>Captain's Log</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="captainName">Captain's Name:</label>
				<input
					id="captainName"
					value={log.captainName}
					type="text"
					onChange={handleTextChange}
					placeholder="Name of Captain"
					required
				/>
				<label htmlFor="title">Title:</label>
				<input
					id="title"
					value={log.title}
					type="text"
					onChange={handleTextChange}
					placeholder="Title"
					required
				/>

				<label htmlFor="post">Post:</label>
				<textarea
					id="post"
					value={log.post}
					type="text"
					onChange={handleTextChange}
					placeholder="Post"
					required
				/>

				<label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
				<input
					id="mistakesWereMadeToday"
					value={log.mistakesWereMadeToday}
					type="checkbox"
					onChange={handleCheckBox}
					placeholder="Mistakes were made today"
					checked={log.mistakesWereMadeToday}
				/>
				<label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
				<input
					id="daysSinceLastCrisis"
					value={log.daysSinceLastCrisis}
					type="number"
					onChange={handleTextChange}
					placeholder="Days since last crisis"
					required
				/>
				<input type="submit" />
			</form>
			<Link to={`/bookmarks/${index}`}>
				<button>Go Back</button>
			</Link>
		</div>
	);
};

export default LogEdit;
