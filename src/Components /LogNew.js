import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogNew() {
	const [log, SetLog] = useState({
		captainName: "",
		title: "",
		post: "",
		mistakesWereMadeToday: "",
		daysSinceLastCrisis: "",
	});
	const navigate = useNavigate();

	const handleTextChange = (event) => {
		SetLog({ ...log, [event.target.id]: event.target.value });
	};
	const handleCheckboxChange = () => {
		SetLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API_URL}/logs`, log)
			.then((res) => {
				navigate("/logs");
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="captainName">Captain's Name : </label>
				<input
					id="captainName"
					value={log.captainName}
					type="text"
					onChange={handleTextChange}
					placeholder="The Captain Name"
					required
				/>
				<br />

				<label htmlFor="title">Title</label>
				<input
					id="title"
					value={log.title}
					type="text"
					onChange={handleTextChange}
					placeholder="The Title"
					required
				/>
				<br />

				<label htmlFor="post">Post</label>
				<textarea
					id="post"
					name="post"
					value={log.post}
					onChange={handleTextChange}
					placeholder="Post"
				/>
				<br />

				<label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
				<input
					id="mistakesWereMadeToday"
					type="checkbox"
					onChange={handleCheckboxChange}
					checked={log.mistakesWereMadeToday}
				/>
				<br />

				<label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
				<input
					id="daysSinceLastCrisis"
					value={log.daysSinceLastCrisis}
					type="number"
					onChange={handleTextChange}
					placeholder="daysSinceLastCrisis"
					required
				/>
				<input type="submit" />
			</form>
		</div>
	);
}

export default LogNew;

// "": "Ahab",
// "title": "Whale",
// "post": "By heavens man, we are turned round and round in this world, like yonder windlass, and fate is the handspike.",
// "mistakesWereMadeToday": true,
// "daysSinceLastCrisis": 20
