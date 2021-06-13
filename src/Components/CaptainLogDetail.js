import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const CaptainLogDetail = (props) => {
  const [captainLog, setCaptainLog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    fetchCaptainLog();
  }, []);

  const fetchCaptainLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setCaptainLog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = captainLog;

  return (
    <div>
      <h1>Captain's Log Show</h1>
      <p>Name: {captainName}</p>
      <p>
        Title: {title} - By {captainName}
      </p>
      <p>Post: {post}</p>
      <p>Mistakes Were Made Today: {`${mistakesWereMadeToday}`}</p>
      <p>Days since last crisis: {daysSinceLastCrisis}</p>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/logs/new`}>
        <button>Create</button>
      </Link>
    </div>
  );
};

export default CaptainLogDetail;
