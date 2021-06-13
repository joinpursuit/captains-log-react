import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const CaptainLogEdit = (props) => {
  let { index } = useParams();
  let history = useHistory();

  const [captainLog, setCaptainLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (e) => {
    setCaptainLog({ ...captainLog, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setCaptainLog({
      ...captainLog,
      mistakesWereMadeToday: !captainLog.mistakesWereMadeToday,
    });
  };

  const fetchCaptainLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setCaptainLog(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCaptainLog();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateCaptainLog(captainLog, index);
    history.push(`/logs/${index}`);
  };

  return (
    <div>
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={captainLog.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={captainLog.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={captainLog.post}
          type="text"
          onChange={handleTextChange}
          placeholder="Post"
          required
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          value={captainLog.mistakesWereMadeToday}
          type="checkbox"
          onChange={handleCheckBox}
          placeholder="Mistakes were made today"
          checked={captainLog.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={captainLog.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="Days since last crisis"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CaptainLogEdit;
