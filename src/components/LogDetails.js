import React, {useState, useEffect}from "react"
import {Link, useParams } from "react-router-dom";
import axios from "axios";
function LogDetails () {
    const [log,setLogs] = useState([]);
    let {index} = useParams();
    const API = process.env.REACT_APP_API_URL; //local host
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API}/logs/${index}`);
            setLogs(response.data);
        };
        fetchData();
    }, []);
    return(
            <div>
              <h2>Show</h2>
                "{log.title} - By {log.captainName}"
              <p>Post: {log.post}</p>
              <p>
                Mistakes Were Made Today:{" "}
                {log.mistakesWereMadeToday === true ? "true" : "false"}
              </p> 
              <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
              <Link to={"/logs"}>
                <button>Back</button>
              </Link>
              <Link to={`/logs/${index}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
          );
 }

export default LogDetails;