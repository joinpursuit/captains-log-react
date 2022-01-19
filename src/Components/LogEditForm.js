import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogEditForm() {
    let { index } = useParams()
    const [log, setLog] = useState({
        captainsName:"",
        title:"",
        post:"",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis:0

    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
    
      useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res)=>{
          setLog(res.data);
        })
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
        .then(()=>{
          navigate("/logs")
        }).catch((err)=>{
          navigate("not-found")
        })
      };

      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name:</label>
            <input
              id="captainName"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              placeholder=""
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              value={log.title}
              type="text"
              onChange={handleTextChange}
              placeholder=""
            />
            <label htmlFor="post">Post:</label>
            <textarea
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="What happend today?"
              onChange={handleTextChange}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
              id="daysSinceLastCrisis"
              type="number"
              name="daysSinceLastCrisis"
              value={log.daysSinceLastCrisis}
              onChange={handleTextChange}
              placeholder=""
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
            />
            <br />
    
            <input type="submit" />
          </form>
          <Link to={`/logs/${index}`}>
            <button>Go back</button>
          </Link>
        </div>
      );

}

export default LogEditForm;