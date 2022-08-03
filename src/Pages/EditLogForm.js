import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EditLogForm() {
	const API = process.env.REACT_APP_API_URL;
	const { id } = useParams();
	const navigate = useNavigate();
	const [log, setlog] = useState({
		captainName: "",
		title: "",
		post: "",
		mistakesWereMadeToday: true,
		daysSinceLastCrisis: 0,
	});
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
	useEffect(() => {
		axios
			.get(`${API}/logs/${id}`)
			.then((response) => {
				setlog(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleChange = (event) => {
		setlog({
			...log,
			[event.target.id]: event.target.value,
		});
	};
	const handleCheckbox = (event) => {
		setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/logs/${id}`, log)
			.then(() => {
				navigate(`/logs/${id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="log-form">
			<h1>Edit</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Captain's Name:
					<input
						id="captainName"
						type="text"
						name="captainName"
						onChange={handleChange}
						value={log.captainName}
					/>
				</label>
				<br />
				<label>
					Title:
					<input
						id="title"
						type="text"
						name="title"
						onChange={handleChange}
						value={log.title}
					/>
				</label>
				<br />
				<label htmlFor="post">Post:</label>
				<textarea id="post" name="post" onChange={handleChange} value={log.post} />
				<br />
				<label>
					Mistakes were made today?
					<input
						id="mistakesWereMadeToday"
						type="checkbox"
						name="mistakesWereMadeToday"
						onChange={handleCheckbox}
						checked={log.mistakesWereMadeToday}
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
						value={log.daysSinceLastCrisis}
					/>
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
			<button onClick={() => deleteThisLog()}>Delete</button>
			<Link to={`/logs/${id}`}>
				<button>Back</button>
			</Link>
		</div>
	);
}
