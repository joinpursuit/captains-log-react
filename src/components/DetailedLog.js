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
        <div>
            <h2>Captain's Name: {indexedlog.captainName}</h2>
            <h3>Title: {indexedlog.title}</h3>
            <h4>Mistakes were made? {indexedlog.mistakesWereMadeToday}</h4>
            <h4>Days since last crisis? {indexedlog.daysSinceLastCrisis}</h4>
            <p>{indexedlog.post}</p>

            <Link to={`/logs`}><button>Back</button></Link>
            <Link to={`/logs/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DetailedLog;