import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogNewForm() {
  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    crisis: "",
    mistakes: false,
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isMistakes: !log.isMistakes });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/logs/`, log)
    .then((res)=>{
      navigate("/logs");
    }).catch((err)=>{
      console.log(err);
    })
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
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title</label>
        <input 
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea 
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input 
          id="daysSinceLastCrisis"
          type="number"
          name="crisis"
          value={log.daysSinceLastCrisis}
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
};

export default LogNewForm;