import Log from "./Log";

const Logs = (logs) => {
	console.log("LOGS:", logs);
	// nothing in the array --- why?
	return (
		<div className="Logs">
			<h1> Captain's Log Index</h1>
			{/* {logs.map((log) => {
				return <h5>{log.title}</h5>;
			})} */}
			<ul>
				{logs.map((log, index) => {
					return <Log key={log.id} log={log} index={index} />;
				})}
			</ul>
		</div>
	);
};
export default Logs;

// show list of logs
// git@github.com:JeffreySebastian-Pursuit/captains-log-react.git
