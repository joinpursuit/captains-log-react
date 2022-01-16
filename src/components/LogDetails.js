import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API;

function LogDetails() {
    const [log, setLog] = useState([]);
    let {index} = useParams();
    let navigate = useNavigate();

    useEffect(()=> {
        axios.get(`${API_URL}/logs/${index}`)
             .then(res => setLog(res.data))
             .catch(err => console.log(err))
    }, [index])

    const handleDelete = () => {
        axios.delete(`${API_URL}/logs/${index}`)
             .then(res => navigate("/logs"))
             .catch(err => console.log(err))
    }

    let {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = log;

    return (
        <div className="center">
            <div className="log-info">
                <h2>{title} - By {captainName}</h2>
                <div className="card-section">
                    <div className="card-title">TITLE</div>
                    <div className="card-info">{title}</div>
                </div>
                <div className="card-section">
                    <div className="card-title">MISTAKES</div>
                    <div className="card-info">{mistakesWereMadeToday ? "True" : "False"}</div>
                </div>
                <div className="card-section">
                    <div className="card-title">DAYS SINCE LAST CRISIS</div>
                    <div className="card-info">{daysSinceLastCrisis}</div>
                </div>
                <div className="card-section">
                    <div className="card-title">POST</div>
                    <div className="card-info">{post}</div>
                </div>
                <div className="card-links">
                    <Link to={"/logs"}><button>Back</button></Link>
                    <Link to={`/logs/${index}/edit`}><button>Edit</button></Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default LogDetails;