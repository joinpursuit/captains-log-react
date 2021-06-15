import { useState } from "react";
import { useHistory } from "react-router-dom";

const New = ({ addLog }) => {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
    console.log("submit was handled");
    history.push("/logs");
  };

  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = log;

  return (
    <div>
      <h1>Add Log</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          type="text"
          onChange={handleTextChange}
          id="captainName"
          value={captainName}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          onChange={handleTextChange}
          id="title"
          value={title}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={post}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          id="mistakesWereMadeToday"
          value={mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          type="number"
          onChange={handleTextChange}
          id="daysSinceLastCrisis"
          value={daysSinceLastCrisis}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default New;
