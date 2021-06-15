import React from "react";
import { useEffect } from "react";

export default function NewLog({addLog, newLog, setNewLog}) {

  const handleTextChange = (event) => {
    setNewLog({ ...newLog, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewLog({
      ...newLog,
      mistakesWereMadeToday: !newLog.mistakesWereMadeToday,
    });
  };

  useEffect(() => {
    addLog();
  }, []);

  return (
    <div>
      <form onSubmit={handleTextChange}>
        <label for="captain-name">Captain Name:</label>
        <input id="captain-name" />
        <label for="title">Title:</label>
        <input />
        <label for="post">Post:</label>
        <input type="checkbox" onChange={handleCheckboxChange}/>
        <label for="mistakes">Mistakes Were Made Today:</label>
        <input />
        <label for="last-crisis">Days Since Last Crisis:</label>
        <input />
        <button>Submit</button>
      </form>
    </div>
  );
}
