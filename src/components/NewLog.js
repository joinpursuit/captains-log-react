import { useState } from "react";
import { useHistory } from "react-router";

const NewLog = ({ addLog }) => {
  let history = useHistory();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });

  const handleChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheck = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
    history.push("/logs");
  };

  return (
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

      <label htmlFor="post">Post: </label> <textarea 
        id="post" 
        value={log.post} 
        onChange={handleChange} />

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
  );
};

export default NewLog;
