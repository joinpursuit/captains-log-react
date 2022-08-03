import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Log(props) {
	const { logInfo, id, API } = props;
	const navigate = useNavigate();
	const deleteThisLog = () => {
		axios
			.delete(`${API}/logs/${id}`)
			.then(() => {
				navigate("/logs");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="Log">
			<tr>
				<Link to={`/logs/${id}`}>
					{" "}
					<h3>{logInfo.title}</h3>
				</Link>
				<td>
					<h2>{logInfo.captainName}</h2>
				</td>
				<p>{logInfo.post}</p>
				<p>{logInfo.daysSinceLastCrisis} days since last crisis.</p>
				<Link to={`/logs/${id}/edit`}>
					<button>Edit</button>
				</Link>
				<button onClick={() => deleteThisLog()}>Delete</button>
			</tr>
		</div>
	);
}
