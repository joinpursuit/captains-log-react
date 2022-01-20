import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LogNewForm(){
    const[log, setLog] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: "",
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };
    
    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/logs`, log)
          .then((res)=>{
            navigate("/logs");
          }).catch((err)=>{
            console.log(err);
          })
    };  
    return(
        <div>
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
    </div>
    )
}

export default LogNewForm;