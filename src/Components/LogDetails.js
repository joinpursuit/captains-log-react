import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

function LogDetails(){
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();


    useEffect(()=>{
        axios.get(`${API_URL}/logs/${index}`)
        .then((res)=>{
            setLog(res.data);
        }).catch(()=>{
            navigate("not-found")
        })
    }, [index]);
    
    const handleDelete = () => {
        axios.delete(`${API_URL}/bookmarks/${index}`)
        .then((res)=>{
          navigate("/bookmarks");
        }).catch(()=>{
          navigate("not-found")
        })
      };


    return(
        <div>
            <h2>{log.title} - By {log.captainName}</h2>
            <p>{log.post}</p>
            <h4>Days since last crisis: {log.daysSinceLastCrisis}</h4>
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
        </div>
    )
}

export default LogDetails;