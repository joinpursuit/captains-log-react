import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<h1>Captain's Log</h1>
			</Link>
			&nbsp;
			<Link to='/logs'>
                <button className="view-logs">View Logs</button>
            </Link>
			&nbsp;
			<Link to='/logs/new'>
                <button className="create-new-log">Create New Log</button>
            </Link>
		</nav>
	);
};

export default Nav;
