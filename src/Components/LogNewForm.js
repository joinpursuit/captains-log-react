/** @format */

import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
	const [log, setLog] = useState({
		captainName: '',
		title: '',
		post: '',
		mistakesWereMadeToday: false,
		daysSinceLastCrisis: 0,
	});

	const navigate = useNavigate();

	const addLog = () => {
		axios
			.post(`${API}/logs`, log)
			.then((response) => navigate(`/logs`)) // happy path! only happens if above request worked
			.catch((error) => console.error(error)); // bad path! happens when our request fails!
	};
	/* We need a function to SEND our DATA to the DATABASE
    1. Get a handle on our data
    2. send a POST request to our DB
    3. < What happens after we succeed? >
  */
	const handleTextChange = (event) => {
		setLog({ ...log, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addLog();
	};
	return (
		<div className='New'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='captainName'>Name:</label>
				<input
					id='captainName'
					name='captainName'
					value={log.captainName}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Captain'
					required
				/>
				<label htmlFor='title'>Title:</label>
				<input
					id='title'
					name='title'
					type='text'
					required
					value={log.title}
					placeholder='Title'
					onChange={handleTextChange}
				/>
				<label htmlFor='post'>Post:</label>
				<input
					id='post'
					type='text'
					name='post'
					value={log.post}
					placeholder='Famous Quote'
					onChange={handleTextChange}
				/>
				<label htmlFor='mistakesWereMadeToday'>Mistakes Made Today:</label>
				<input
					id='mistakesWereMadeToday'
					type='checkbox'
					onChange={handleCheckboxChange}
					checked={log.mistakesWereMadeToday}
				/>
				<label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
				<textarea
					id='daysSinceLastCrisis'
					name='daysSinceLastCrisis'
					value={log.daysSinceLastCrisis}
					onChange={handleTextChange}
					placeholder='Days Since Last Crisis'
				/>
				<br />
				<div className='showNavigation'>
					<Link to={`/logs`}>
						<button>
							<h4>Back</h4>
						</button>
					</Link>
					<input type='submit' />
				</div>
				<br />
			</form>
		</div>
	);
}

export default LogNewForm;
