import { useState, useEffect } from "react";

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
				console.log(data);
			})
			.catch((err) => {
				return err;
			});
	}, []);
	const toTheIndex = () => {
		console.log("it is being clicked");
	};

	let mappingOver = logs.map((each) => {
		return <div onClick={toTheIndex}>{each.title}</div>;
	});
	return <div>{mappingOver}</div>;
}

export default Logs;
