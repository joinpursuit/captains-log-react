import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				Captain's Log
				<Link to="/logs">Show Logs</Link>
				<Link to="/logs/new">New Log</Link>
			</div>
		);
	}
}
