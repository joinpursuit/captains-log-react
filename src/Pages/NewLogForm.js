import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function NewLogForm() {
	const API = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();
	const [log, setlog] = useState({
		captainName: "",
		title: "",
		post: "",
		mistakesWereMadeToday: false,
		daysSinceLastCrisis: 0,
	});
	const handleChange = (event) => {
		setlog({
			...log,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleCheckbox = (event) => {
		setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/logs`, log)
			.then(() => {
				navigate("/logs");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="log-form">
			<form onSubmit={handleSubmit}>
				<label>
					Captain's Name:
					<input
						id="captainName"
						type="text"
						name="captainName"
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Title:
					<input id="title" type="text" name="title" onChange={handleChange} />
				</label>
				<br />
				<label htmlFor="post">
					Post
				</label>
				<textarea id="post" name="post" onChange={handleChange} />
				<br />
				<label>
					Mistakes were made today?
					<input
						id="mistakesWereMadeToday"
						type="checkbox"
						name="mistakesWereMadeToday"
						checked={log.mistakesWereMadeToday}
						onChange={handleCheckbox}
					/>
				</label>
				<br />
				<label>
					Days Since Last Crisis:
					<input
						id="daysSinceLastCrisis"
						type="number"
						name="daysSinceLastCrisis"
						onChange={handleChange}
					/>
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
