import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function LogEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  const handleTextChange = (e) => {
    //   console.log(e.target.value)
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(()=> {
      axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res)=> {
            setLog(res.data)
        }).catch((err)=> {
            navigate("/not-found")
        })
  }, [index])

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
        .then((res)=> {
            navigate(`/logs/${index}`)
        }).catch((err)=> {
            throw err
        })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          type="text"
          id="name"
          value={log.name}
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={log.title}
          onChange={handleTextChange}
          placeholder="Title here"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          type="text"
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Post here"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="text"
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days here"
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br></br>
        <input type="submit" value="submit"/>
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
export default LogEditForm;
