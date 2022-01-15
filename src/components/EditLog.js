import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditLog = () => {
    const API = process.env.REACT_APP_API_URL
    console.log(API)

    let {index} = useParams();

    let navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 0,
      });

      useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API}/logs/${index}`);
            setLog(response.data);
        };
        fetchData();
    }, []);

    const handleConfirmation = () =>{
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    }

    const handleChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .put(`${API}/logs/${index}`, log)
        .then(() => navigate(`/logs/${index}`));
      };
     
    return(
        <div>
            <form className="LogForm" onSubmit= {handleSubmit}>
                <h1>Edit</h1>
                <label htmlFor="captainName">
                Captain's Name:{" "}
                </label>
                <input
                    type="text"
                    id="captainName"
                    value={log.captainName}
                    onChange={handleChange}
                />
                <label htmlFor="title">
                Title:{" "}
                </label>
                <input 
                    type="text"
                    id="title"
                    value={log.title}
                    onChange={handleChange}
                />
                
                <label htmlFor="post">Post:{" "}</label>
                <textarea
                    id="post"
                    value={log.post}
                    onChange={handleChange}
                />
                <label htmlFor=
                "Mistakes were made today">
                {" "} 
                Mistakes were made today :{" "}
                </label>
                <input
                    type="checkbox"
                    id="mistakesWereMadeToday"
                    value={log.mistakesWereMadeToday}
                    onChange={handleConfirmation}
                />
                <label htmlFor="Days since last crisis"> Days Since Last Crisis:</label>
                    <input
                    type="number"
                    id="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    onChange={handleChange}
                    />
                    <br/> 
                    <Link to={"/logs"}>
                <button>Back</button>
              </Link>
                    <input type="submit"/>
            </form>
        </div>
    )
 }

export default EditLog;