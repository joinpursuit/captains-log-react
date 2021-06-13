import { useState } from "react";
import { withRouter } from "react-router-dom";

const LogNewForm = (props) => {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
      });
    
      const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.addLog(log);
        props.history.push("/logs");
      };
      return (
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Captain Name:</label>
            <input
              id="name"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Captain"
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={log.title}
              placeholder="Title"
              onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <input
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="Write post"
              onChange={handleTextChange}
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={bookmark.description}
              onChange={handleTextChange}
              placeholder="Describe why you bookmarked this site"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
}