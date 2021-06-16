import React from "react";
import { Link } from "react-router-dom";

function Logs({ logs }) {
  const logsList = logs.map((log, i) => {
    return (
      <li key={i}>
        <Link to={`/logs/${i}`}>{log.title}</Link>
      </li>
    );
  })

  return (
    <div>
      <h1>Captain's Log Index</h1>
      <ul>{logsList}</ul>
    </div>
  );
}

export default Logs;
