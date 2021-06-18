import { useState } from "react";
import { withRouter } from "react-router-dom";

const NewLog = (props) => {
	// const history = useHistory
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

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addNewLog(log);
		props.history.push("/logs");
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
					required
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
		</div>
	);
};

export default withRouter(NewLog);
