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
            console.log(err);
        });
    };

    return(
        <article className="log-card">
            <div className="card-details">  
                <h4>{log.title} - By {log.captainName}</h4>
                <h4>{log.post}</h4>
                <h4>{log.mistakesWereMadeToday}</h4>
                <h4>Days since last crisis: {log.daysSinceLastCrisis}</h4>
            </div>
            <div className="buttons">
                <Link to={`/logs`}>
                    <button> BACK </button>
                </Link>
                <Link to={`/logs/${index}/edit`}> <button> EDIT </button> </Link>
                <button onClick={handleDelete}> DELETE </button>
            </div>
        </article>
    )
}

export default LogDetails;