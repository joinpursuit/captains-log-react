import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logs extends Component {

  render() {
    //   debugger
      const {logs} = this.props
    return (
      <div>
        <h1>Captain's Log</h1>
        <h2>Index</h2>
        <ul>{logs.map((log, index) => {
           return <li key={log.title}><Link to={`/logs/${index}`}>{log.title}</Link></li>
        })}</ul>
      </div>
    );
  }
}
