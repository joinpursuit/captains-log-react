import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewLogForm() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const [logs, setLogs] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  });

  const handleTextChange = (event) => {
    setLogs({ ...logs, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
  };
  // PUT AND POST HAS A REQ.BODY, WHAT TO REPLACE W/OR MAKE NEW
  // ON FORM SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, logs).then(() => {
      navigate("/logs");
    });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="name"
          value={logs.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={logs.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          value={logs.post}
          placeholder="Write something"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Made:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days since last Crisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          type="text"
          value={logs.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewLogForm;
