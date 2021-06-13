import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Logs = ({ logsArr }) => {
  const array = logsArr.map((log, index) => {
    return (
      <ul>
        <li>
          <a key={index} href={`http://localhost:3000/logs/${index}`}>
            {log.title}
          </a>
        </li>
      </ul>
    );
  });

  console.log(logsArr);
  return (
    <div>
      <h1>Captain's Log Index</h1>
      {array}
    </div>
  );
};

export default Logs;
