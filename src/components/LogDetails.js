import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; 

const LogDetails = () => {
    const [ log, setLog ] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`${API_URL}/logs/${index}`)
        .then((res) => {
            setLog(res.data);
        }).catch((err)=> {
            console.log(err);
            navigate("/not-found");
        });
    }, [index]);

    const handleDelete = () => {
        axios.delete(`${API_URL}/logs/${index}`)
        .then((res)=> {
            navigate("/logs");
        }).catch((err)=> {
            navigate("/");
        });
    };

    return(
        <article className="log-card">
            <div className="card-details">  
                <h4>{log.title} - By {log.captainName}</h4>
                <p>{log.post}</p>
                <h4>
                    Mistakes Made today:
                    {log.mistakesWereMadeToday ? 
                    (<span>💥 Yes</span>) : 
                    (<span>🙅‍♂‍ No</span>)}
                </h4>
                <h4>Days since last crisis: {log.daysSinceLastCrisis}</h4>
            </div>
            <div className="buttons">
                <Link to={`/logs`}>
                    <button> Back </button>
                </Link>
                <Link to={`/logs/${index}/edit`}> <button> Edit </button> </Link>
                <button onClick={handleDelete}> Delete </button>
            </div>
        </article>
    )
}

export default LogDetails;