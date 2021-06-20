import React, { Component } from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navBar">
                <Link to="/">Home</Link>{"  "}
                <Link to="/logs" className="navBar">Logs</Link>{"  "}
                {/* Displays a list of log.title that are clickable to take the user to /logs/:index. */}
                <Link to="/logs/new" className="navBar">New Log</Link>{"  "}
                </nav>
            </div>
        )
    }
}