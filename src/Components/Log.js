import React from "react";

export default function Log(props) {
	const { logInfo } = props;
	return (
		<div>
			<h2>{logInfo.captainName}</h2>
			<h3>{logInfo.title}</h3>
			<p>{logInfo.post}</p>
			<p>{logInfo.daysSinceLastCrisis} days since last crisis.</p>
		</div>
	);
}
