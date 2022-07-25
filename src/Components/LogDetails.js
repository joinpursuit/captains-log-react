/** @format */

import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
	const [log, setLog] = useState({});
	let { index } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/logs/${index}`)
			.then((response) => setLog(response.data))
			.catch((error) => navigate('/*'));
	}, [index, navigate]);

	const handleDelete = () => {
		axios
			.delete(`${API}/logs/${index}`)
			.then((response) => {
				navigate('/logs');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<article className='log-details'>
				<h2>
					{log.title} - By {log.captainName}
				</h2>
				<p>{log.post}</p>
				<br />
				<section>
					<h4>Days since last crisis:</h4>{' '}
					<span> {log.daysSinceLastCrisis}</span>
				</section>
			</article>
			<div className='showNavigation'>
				<div>
					{' '}
					<Link to={`/logs`}>
						<button>
							<h4>Back</h4>
						</button>
					</Link>
				</div>
				<div>
					{' '}
					<Link to={`/logs/${index}/edit`}>
						<button>
							<h4>Edit</h4>
						</button>
					</Link>
				</div>
				<div>
					{' '}
					<Link to={`/logs`}>
						<button onClick={handleDelete}>
							<h4>Delete</h4>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default LogDetails;
