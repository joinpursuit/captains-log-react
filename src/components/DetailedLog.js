import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios"
const API = process.env.REACT_APP_API_URL;

function DetailedLog(){
    const [indexedlog, setindexedlog] = useState([])
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/logs/${index}`)
        .then((res)=>{
            console.log(res)
            setindexedlog(res.data)
        }).catch((err)=>{
            navigate("*");
        })

    }, [index, navigate]);

console.log(indexedlog)

const handleDelete =()=>{
    axios.delete(`${API}/logs/${index}`)
    .then((res)=>{
        navigate("/logs")
    }).catch((err)=>{
        console.log(err)
    })
};

    return(
        <div className="Details">
            <div className="ShowLog">
                <h2>Captain's Log: {indexedlog.captainName}</h2>
                <h3>Show: {indexedlog.title}</h3>
                <h4>Mistakes were made? {indexedlog.mistakesWereMadeToday ? (<span>True</span>) : (<span>False</span>)}</h4>
                <h4>Days since last crisis: {indexedlog.daysSinceLastCrisis}</h4>
                <p>{indexedlog.post}</p>
            </div>
                <button><Link to="/logs">Back</Link></button>
                <button><Link to={`/logs/${index}/edit`}>Edit</Link></button>
                <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DetailedLog;
