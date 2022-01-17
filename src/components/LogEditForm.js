import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function LogEditForm() {
  const URL = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  // useParams GRABS REACT ROUTER PARAMS
  // GRABS NAVIGATE FUNCTION FROM REACT ROUTER
  const navigate = useNavigate();

  const [logs, setLogs] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  });
  // CALL setBookmark W/BOOKMARK AT CURRENT INDEX POSITION
  // setBookmark({name: "MDN", url: "www.mdn.com", category: "educational", description: "", isFavorite: false})

  const handleTextChange = (event) => {
    setLogs({ ...logs, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
  };
  // GET/MAKE API CALL USING INDEX FROM ROUTER
  useEffect(() => {
    axios.get(`${URL}/logs/${index}`).then((response) => {
      setLogs(response.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ON SUBMIT, MAKE A PUT REQ. ONLY BOOKMARK AT THAT INDEX POSITION SHOULD BE UPDATED IN API THEN NAVIGATE TO BOOKMARK THAT REFLECT CHANGES
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/logs/${index}`, logs).then(() => {
      navigate(`/logs/${index}`);
    });
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="name"
          type="text"
          value={logs.captainName}
          placeholder="Captains Name"
          onChange={handleTextChange}
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

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
/**
 * <label htmlFor="mistakesWereMadeToday">Mistakes:</label>
        <select name="mistakesWereMadeToday" id="mistakesWereMadeToday">
          <option value="true">True</option>
          <option value="false">False</option>
          {/* onChange={handleDropdown} 
          // </select>
 */
