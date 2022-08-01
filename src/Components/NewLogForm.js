import React, { Component, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function NewLogForm() {
	const [name, setName]= useState("");
	const navigate = useNavigate();

	const addLog = (newLog) => {
		axios
			.post(`${process.env.REACT_APP_API_URL}/bookmarks`, newLog)
			.then(() => {
				navigate(`/logs`);
			})
			.catch((c) => navigate("/error"));
	};

	return <div>
		<form onSubmit={this.addLog()}>
			<label>Captain's Name 
				<input type="text" placeholder="name"/>
			</label>
			<label>
				<input type="text"/>
			</label>
			<input type="submit"/>
		</form>
	</div>;
}
