import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useCallback } from "react";
import axios from "axios";

const LogDetails = () => {
  const [log, setLog] = useCallback({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${id}`)
      .then((response) => setLog(response.data))
      .catch((e) => console.log(e));
  }, [id]);
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = log;
  return (
    <section>
      <h3>
        {title}- by {captainName}
      </h3>
      <div>{post}</div>
      <div>{mistakesWereMadeToday}</div>
      <button>Back</button>
      <button>Delete</button>
    </section>
  );
};

export default LogDetails;

/*

/logs/:index
Displays the details of each log
captainName
title
post
mistakesWereMadeToday
daysSinceLastCrisis
Displays two buttons
back, takes the user back to the /logs view
delete, deletes the log and takes the user back to the /logs view
**/
