import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const EditLog = ({ updateLog }) => {
  let { index } = useParams();
  let history = useHistory();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });

  const fetchLog = async () => {
      try {
          const res = await axios.get(`${API}/logs/${index}`);
          setLog(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
      fetchLog();
    }, []);
    
  const handleChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheck = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateLog(log, index);
    history.push(`/logs/${index}`);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>New Log Form</h1>
        <label htmlFor="name">
          Captain's Name:{" "}
          <input
            type="text"
            id="captainName"
            value={log.captainName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="title">
          Title:{" "}
          <input
            type="text"
            id="title"
            value={log.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="post">Post: </label>{" "}
        <textarea id="post" value={log.post} onChange={handleChange} />
        <label htmlFor="Mistakes were made today">
          {" "}
          Mistakes were made today :{" "}
        </label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          onChange={handleCheck}
        />
        <label htmlFor="Days since last crisis">Days Since Last Crisis: </label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EditLog;
