import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogNewForm(){
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });
    const navigate = useNavigate();
    
    const API_URL = process.env.REACT_APP_API_URL;

    const handleTextChange = (e) => {
        setLog({ ...log, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/logs`, log)
        .then((res) => {
          navigate("/logs");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name:</label>
            <input
              id="captainName"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of the Captain"
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={log.title}
              placeholder="Nick Names, Alias"
              onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <textarea
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="The Captain's signature quote"
              onChange={handleTextChange}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
              id="daysSinceLastCrisis"
              type="number"
              name="daysSinceLastCrisis"
              value={log.daysSinceLastCrisis}
              onChange={handleTextChange}
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
}

export default LogNewForm;