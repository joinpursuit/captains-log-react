import { Link } from "react-router-dom";

// forgot to destructure and was stuck for whole 3 days ...
function Log({ log, index }) {
	return (
		<tr>
			<td>
				<Link to={`/logs/${index}`}>{log.title}</Link>
			</td>
		</tr>
	);
}

export default Log;
