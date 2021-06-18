import { Link } from "react-router-dom";

const Log = ({ log, index }) => {
	console.log("LOG");
	return (
		<li key={log.id}>
			<Link to={`/logs/${index}`}>{log.title}</Link>
		</li>
	);
};

export default Log;
