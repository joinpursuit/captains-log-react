import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logs extends Component {

  render() {
    //   debugger
      const {logs} = this.props
    return (
      <div>
        <h1>Captain's Log</h1>
        {/* <ul>{logs.map((log, i) => {
           return <li key={log.title}><NavLink to={`/logs/${i}`}>{log.title}</NavLink></li>
        })}</ul> */}
      </div>
    );
  }
}