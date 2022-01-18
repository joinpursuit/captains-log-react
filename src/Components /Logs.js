import { useState, useEffect } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

function Logs() {
	// creating a place to store LOGS ///
	const [logs, setLogs] = useState([]);
	useEffect(() => {
		fetch(API + "/logs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// adding the data from the api to a state ..
				setLogs(data);
			})
			.catch((err) => {
				return err;
			});
	}, []);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>All The Title </th>
					</tr>
				</thead>
				<tbody>
					{logs.map((log, index) => {
						return <Log key={index} log={log} index={index} />;
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Logs;
