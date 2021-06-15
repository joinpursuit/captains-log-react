import React , {useState} from "react";
import { useHistory } from "react-router-dom";

export default function NewLog({ addLog }) {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  let history = useHistory();
  const handleTextChange = (event) => {
    // debugger;
    setNewLog({ ...newLog, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    // debugger;
    setNewLog({
      ...newLog,
      mistakesWereMadeToday: !newLog.mistakesWereMadeToday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    addLog(newLog)
    history.push("/logs");
  };

  return (
    <div>
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label for="captainName">Captain's Name</label>
        <input
          value={newLog.captainName}
          type="text"
          id="captainName"
          onChange={handleTextChange}
        />
        <label for="title">Title:</label>
        <input
          value={newLog.title}
          type="text"
          id="title"
          onChange={handleTextChange}
        />
        <label for="post">Post:</label>
        <textarea
          value={newLog.post}
          id="post"
          onChange={handleTextChange}
        ></textarea>
        <label for="mistakes">Mistakes were made today</label>
        <input
          value={newLog.mistakesWereMadeToday}
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <label for="last-crisis">Days Since Last Crisis:</label>
        <input
          value={newLog.daysSinceLastCrisis}
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleCheckboxChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
