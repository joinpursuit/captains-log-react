import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogIndex () {
    const [log, setLog ] = useState([]);
    const { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLog(data)
            })
    },[index])

    const handleDelete =()=>{
        axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res) => {
            navigate("/logs")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="Show">
            <h1>Show</h1>
            <div className="container">
                <h2>{log.title} - By {log.captainName}</h2>
                <h3>{log.post}</h3>
                <h4>Days since last crisis: <div>{log.daysSinceLastCrisis}</div></h4>
            </div>
            <button><Link to="/logs">Back</Link></button>
            <button><Link to={`/logs/${index}/edit`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default LogIndex;