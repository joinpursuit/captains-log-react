import { useState } from "react";

function LogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });
  /* We need a function to SEND our DATA to the DATABASE
    1. Get a handle on our data
    2. send a POST request to our DB
    3. < What happens after we succeed? >
  */
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">captainName:</label>
        <input
          id="name"
          value={log.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.url}
          placeholder="Title"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          name="post"
          type="text"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesMade">mistakesWereMadeToday:</label>
        <input
          id="mistakeMade"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakeMade}
        />
        <label htmlFor="daysSince">daysSinceLastCrisis:</label>
        <textarea
          id="daysSince"
          name="daysSince"
          type="number"
          value={log.daysSince}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
