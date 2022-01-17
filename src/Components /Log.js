import { Link } from "react-router-dom";

// forgot to destructure and was stuck for whole 3 days ...
function Log({ log, index }) {
	return (
		<div>
			<Link to={`/logs/${index}`}>{log.title}</Link>
		</div>
	);
}

export default Log;
