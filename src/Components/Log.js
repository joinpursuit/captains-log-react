import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function Log() {
	//const { logInfo } = props;
	const { id } = useParams();
	const [logInfo, setLogInfo] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/logs/${id}`)
			.then((response) => {
				setLogInfo(response.data);
			})
			.catch(() => {
				navigate("/error");
			});
	}, [logInfo, id, navigate]);
	return (
		<div>
			<h2>{logInfo.captainName}</h2>
			<h3>{logInfo.title}</h3>
			<p>{logInfo.post}</p>
			<p>{logInfo.daysSinceLastCrisis} days since last crisis.</p>
		</div>
	);
}
