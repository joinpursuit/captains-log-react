import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiURL from "../util/apiURL";
const API = apiURL();
function Show() {
  const [logObj, setLogObj] = useState({});
  let { index } = useParams();

  const logInfo = async () => {
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
      <h1>Captain name: {logObj.captainName} </h1>

      <p>Title: {logObj.title} </p>
      <p>Post: {logObj.post} </p>
      <p> Mistakes Were Made Today: {`${logObj.mistakesWereMadeToday}`}</p>
      <p>Days Since Last Crisis: {logObj.daysSinceLastCrisis} </p>
    </div>
  );
}
export default Show;
