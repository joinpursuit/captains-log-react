import { useParams, useHistory, Link } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import {apiURL} from "../util/apiURL"
const API = apiURL();

export default function ShowLog() {
    const {index} = useParams();
    const history = useHistory();
    const [log,setLog]=useState({});

    const getLog = async () => {

        try {
            const res = await axios.get(`${API}/logs/${index}`);
            setLog(res.data)
        } catch(error) {
            setLog({})
            console.log(error)
        }

    }

    const handleDelete = async ()=>{
        try{
            await axios.delete(`${API}/logs/${index}`)
            history.push("/logs")
        }catch(error){

        }
    }

    useEffect(()=>{
        getLog();

    })

    return (
        <div>
            <h1>Captain's Log</h1>
            <p>Show</p>
            <h1>{log.title} - By {log.captainName}</h1> 
            <h3>{log.post}</h3>
            <h3>{log.mistakesWereMadeToday ? "true" : "false"}</h3>
            <h3>{log.daysSinceLastCrisis}</h3>
            <a onClick={()=>history.push("/logs")}>Back</a>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
    )
}
