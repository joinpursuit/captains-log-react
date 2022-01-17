import React from "react";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
	// creating a state
	const [log, SetLog] = useState();
	let { index } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/logs/${index}`)
			.then((res) => {
				SetLog(res.data);
			})
			.catch(() => {
				navigate("/not-found");
			});
	}, []);

	return (
		<div>
			<h1>{log.captainName}</h1>
			<div>{log.post}</div>
			<div>{log.daysSinceLastCrisis}</div>
		</div>
	);
}

export default LogDetails;
