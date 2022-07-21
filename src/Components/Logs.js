import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const Logs = () => {
	const { index } = useParams();
	const [theLogs, setTheLogs] = useState([]);
	const navigate = useNavigate();

	// time to get the logs
	useEffect(() => {
		axios
			.get(`${API}/logs/${index}`)
			.then((res) => {
				setlog(res.data);
			})
			.catch(() => {
				navigate('/bad-route');
			});
	}, [index, navigate]);

	// deleting the logs
	deleteHandler = () => {
		axios
			.delete(`${API}/logs/${index}`)
			.then(() => {
				navigate('/logs');
			})
			.catch((error) => {
				console.warn(error);
			});
	};
};
    return (
	<div>
		<h1>
			{theLogs.title}  {theLogs.captain}
		</h1>
		<h2>{theLogs.post}</h2>
		<h3>Days since last crisis: {theLogs.daysSinceLastCrisis}</h3>
        <button>View This Log</button>
	</div>
);
export default Logs;
