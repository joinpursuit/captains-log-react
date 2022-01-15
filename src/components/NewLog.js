import {useState} from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const NewLog = () => {
    const API = process.env.REACT_APP_API_URL

    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 0,
      });

    const handleConfirmation = () =>{
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
    }

    const handleChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post(`${API}/logs`, log)
          .then(() => navigate(`/logs`));
      };

    
     
    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <h1>New Log Form</h1>
                <label htmlFor="name">
                Captain's Name:{" "}
                <input
                    type="text"
                    id="captainName"
                    value={log.captainName}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="title">
                Title:{" "}
                <input 
                    type="text"
                    id="title"
                    value={log.title}
                    onChange={handleChange}
                />
                </label>
                <label htmlFor="post">
                Post: {" "}
                </label>
                <textarea
                    id="post"
                    value={log.post}
                    onChange={handleChange}
                />
                <label htmlFor="mistakesWere madeToday">
                {" "}
                Mistakes were made today :{" "}
                </label>
                <input
                    type="checkbox"
                    id="mistakesWereMadeToday"
                    value={log.mistakesWereMadeToday}
                    onChange={handleConfirmation}
                />
                <label htmlFor="daysSinceLastCrisis"> Days Since Last Crisis
                    </label>
                    <input
                    type="number"
                    id="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    onChange={handleChange}
                    />
                    <br/> 
                    <input type="submit"/>
            </form>
        </div>
    )
 }

export default NewLog;