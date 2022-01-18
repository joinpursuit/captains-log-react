import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
    const [log,setLog] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    let { index } = useParams();
    const navigate = useNavigate();

    //Get Request for the index of the array. It will render on each chance in order to present the most recent/accurate information 
    useEffect(() => {
        //make a get request to the url
        //use setLog to update the data we're getting
        axios
        .get(`${URL}/logs/${index}`)
        .then((response) => {
            setLog(response.data)
        })    
    }, []);

    const handleDelete = () => {
        //make a delete request to /logs/:index
        axios
        .delete(`${URL}/logs/${index}`)
        //redirect them to /logs
        .then(()=> navigate (`/logs`)
    )
    };


return (
    <article>
    <h6>Captain's Log</h6>
    <h6>Show</h6>
        <h6>{log.title} - By {log.captainName}</h6>
        <p>Post: {log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>

        <div className="showNavigation">

        <div>
            {" "}
            <Link to={`/logs`}>
            <button>Back</button>
            </Link>
        </div>

        <div>
            {" "}
            <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
            </Link>
        </div>

        <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
        </div>

        </div>
    </article>
);
};

export default LogDetails;