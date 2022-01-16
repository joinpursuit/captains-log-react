import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function LogEditForm() {
  // base URL
  const URL = process.env.REACT_APP_API_URL;
  // the index from React Router
  let { index } = useParams();
  // the navigate function from React Router
  const navigate = useNavigate()

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  // make an API call to our back end 
  // using the index from Router
  // call setBookmark with the bookmark the call returns
  useEffect(() => {
    axios.get(`${URL}/logs/${index}`)
      .then((response) => {
        setLog(response.data)
    })
    .catch((e) => console.log('catch', e))
  }, []);

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleMistakesChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  // what SHOULD we do when the user clicks the submit button
  // - make a put request
  // - render a specific component
  // when we update one resource,
  // we should get to that resource's detail page
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/logs/${index}`, log)
    .then(() => { navigate(`/logs/${index}`)
    })
  };

  return (
    <div className="editform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="Captain's Name"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={log.post}
          placeholder="Post"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleMistakesChange}
          checked={log.mistakesWereMadeToday}
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