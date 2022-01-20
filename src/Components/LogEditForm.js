import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  const navigate = useNavigate();
  const { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });


  // on change, change the state log to value that is being input by user
  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckBoxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

   useEffect(() => {
       axios
       .get(`${API}/logs/${index}`)
       .then((res) => {
        //  console.log(res.data);
         setLog(res.data);
       })
       .catch(
         (err) => {
           navigate("/not-found");
         }
       );
   }, [index, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${API}/logs/${index}`, log).then((res) => {
      navigate(`/logs/${index}`);
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Captain's Name"
          type="text"
        />

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          onChange={handleTextChange}
          placeholder="Title"
          type="text"
        />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Post"
          type="text"
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckBoxChange}
          checked={log.mistakesWereMadeToday}
          type="checkbox"
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
          type="number"
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      <Link to={`/logs/${index}`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
