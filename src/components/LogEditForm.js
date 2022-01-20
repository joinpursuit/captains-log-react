import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function LogEditForm() {
    let { index } = useParams();
  
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
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
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
        .then((res)=>{
          navigate(`/logs/${index}`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
            <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Captain"
            />
           <label htmlFor="title">Title:</label>
            <input
            id="title"
            type="text"
            name="title"
            value={log.title}
            placeholder="Name of Title"
            onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <textarea
            id="post"
            type="text"
            value={log.post}
            placeholder="Name of Post"
            onChange={handleTextChange}
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
            id="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            type="number"
            onChange={handleTextChange}
            placeholder="Days Since Last Crisis"
            />
            <br />
          <input type="submit" />
        </form>
        <Link to={`/logs/${index}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
  
  export default LogEditForm;