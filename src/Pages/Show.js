import { useState } from "react";
import { useParams } from "react-router-dom";
import LogDetail from "../Components/LogDetail";

const Show = ({ deleteLog, logs }) => {
	let { index } = useParams;
	const [log] = useState(logs[index]);
	return (
		<div className="Show">
			<h2>Show</h2>
			<section>
				<LogDetail log={log} deleteLog={deleteLog} index={index} />
			</section>
		</div>
	);
};
export default Show;
