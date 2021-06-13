import { useParams, useHistory } from "react-router-dom"
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

    useEffect(()=>{
        getLog();

    })

    return (
        <div>
            <h1>Captain's Log</h1>
            <h1>{log.captainName}</h1> 
            <h2>{log.title}</h2>
            <h3>{log.post}</h3>
            <h3>{log.mistakesWereMadeToday ? "true" : "false"}</h3>
            <h3>{log.daysSinceLastCrisis}</h3>
            <button onClick={()=>history.push("/logs")}>Back</button>
            <button>Delete</button>
        </div>
    )
}
