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
	<article>
		<h1>
			{theLogs.title} {theLogs.captain}
		</h1>
		<h2>{theLogs.post}</h2>
		<p>Days since last crisis: {theLogs.daysSinceLastCrisis}</p>
		<div className='showNavigation'>
			<Link to={'/logs'}>
				<button>Back</button>
			</Link>
		</div>
		<div>{/* <Link to={`/logs`} */}</div>
	</article>
);
export default Logs;
