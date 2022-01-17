import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogsEdit() {
	let { index } = useParams();
	const [log, setLog] = useState({
		captainName: "",
		title: "",
		post: "",
		mistakesWereMadeToday: false,
		daysSinceLastCrisis: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
			.then((res) => {
				setLog(res.data);
			})
			.catch((err) => {
				navigate("/not-found");
			});
	}, [index]);

	const handleTextChange = (event) => {
		setLog({ ...log, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
			.then((res) => {
				navigate(`/logs/${index}`);
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
					onChange={handleTextChange}
					type="text"
					placeholder="The Captain Name"
					required
				/>
				<br />
				<label htmlFor="title">Title</label>
				<input
					id="title"
					value={log.title}
					onChange={handleTextChange}
					type="text"
					placeholder="The Title"
				/>
				<br />
				<label htmlFor="post">Post</label>
				<textarea
					id="post"
					name="post"
					placeholder="Post"
					onChange={handleTextChange}
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
					onChange={handleTextChange}
					type="number"
					placeholder="daysSinceLastCrisis"
				/>
				<br />
				<input type="submit" />
				<br />
			</form>
			<Link to="/logs">
				<button>Back</button>
			</Link>
		</div>
	);
}

export default LogsEdit;
