import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiURL from "../util/apiURL";

const API = apiURL();

function Show() {
  const [logObj, setLogObj] = useState({});

  let { index } = useParams();

  let logInfo = async () => {
    let res;
    const url = `${API}/logs/${index}`;
    console.log(url);
    try {
      res = await axios.get(`${API}/logs/${index}`);
      console.log(res.data);
      setLogObj(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    logInfo();
  }, []);

  return (
    <div>
      <h1>Show</h1>
      <h3>Captain's Log</h3>
      <p>Captain Name: {logObj.captainName}</p>
      <p>Title: {`${logObj.title} - By ${logObj.captainName}`}</p>
      <p>Post: {logObj.post}</p>
      <p>Mistakes Were Made Today: {`${logObj.mistakesWereMadeToday}`}</p>
      <p>Days since last crisis: {logObj.daysSinceLastCrisis}</p>
      <h4>
        <button>
          <a href="http://localhost:3000/logs">Back</a>
        </button>
      </h4>
      <h4>
        <button>
          <a href={`http://localhost:3000/logs/${index}/edit`}>Edit</a>
        </button>
      </h4>
    </div>
  );
}

export default Show;
