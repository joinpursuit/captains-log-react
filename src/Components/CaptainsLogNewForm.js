import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CaptainsLogsNewForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, logs).then(() => navigate("/logs"));
  };
  // OR:
  // addBookmark(bookmark);

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain:</label>
        <input
          id="name"
          value={logs.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="Title">Title:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={logs.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={logs.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.isFavorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={logs.description}
          onChange={handleTextChange}
          placeholder="Describe why you logs this site"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CaptainsLogsNewForm;
