/** @format */

import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
	let { index } = useParams();
	const navigate = useNavigate();

	const [log, setLog] = useState({
		captainName: '',
		title: '',
		post: '',
		description: '',
		mistakesWereMadeToday: false,
		daysSinceLastCrisis: 0,
	});

	const handleTextChange = (event) => {
		setLog({ ...log, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
	};
	// we need a function to SEND our UPDATED bookmark to the DB
	useEffect(() => {
		axios
			.get(`${API}/logs/${index}`)
			.then((response) => setLog(response.data))
			.catch((error) => console.error(error));
		/* 
      1. Get a handle on the data from our user
      2. Send a request to the DB
      3. < What do if it succeeds ? >
    */
	}, []);

	const updateLog = () => {
		axios
			.put(`${API}/logs/${index}`, log)
			// two arguments because the second argument(log) is the data we have to send. In the backend it is our request.body
			.then((response) => {
				setLog(response.data);
				// updating the bookmark in state to the updated bookmark from our backend
				navigate(`/logs/${index}`);
				// navigatng back to our bookmark show page
			})
			.catch((error) => console.error(error));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateLog();
	};
	return (
		<div className='Edit'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='captainName'>Name:</label>
				<input
					id='captainName'
					value={log.captainName}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Captain'
					required
				/>
				<label htmlFor='title'>Title:</label>
				<input
					id='title'
					type='text'
					required
					value={log.title}
					placeholder='title'
					onChange={handleTextChange}
				/>
				<label htmlFor='category'>Post:</label>
				<input
					id='post'
					type='text'
					name='post'
					value={log.post}
					placeholder='famous quote'
					onChange={handleTextChange}
				/>
				<label htmlFor='mistakesWereMadeToday'>Mistakes Made Today:</label>
				<input
					id='mistakesWereMadeToday'
					type='checkbox'
					onChange={handleCheckboxChange}
					checked={log.mistakesWereMadeToday}
				/>
				<label htmlFor='description'>Days Since Last Crisis:</label>
				<textarea
					id='daysSinceLastCrisis'
					name='daysSinceLastCrisis'
					value={log.daysSinceLastCrisis}
					onChange={handleTextChange}
					placeholder='Days since last crisis'
				/>
				<br />

				<input type='submit' />
			</form>
			<Link to={`/logs/${index}`}>
				<button>Nevermind!</button>
			</Link>
		</div>
	);
}

export default LogEditForm;
