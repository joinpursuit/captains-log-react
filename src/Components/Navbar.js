
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<h1>
				<Link to='/logs'>Captain's Logs</Link>
			</h1>
			<button>
				<Link to='/logs/new'>Add New Log</Link>
			</button>
		</nav>
	)
}

export default Navbar