import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import {apiURL} from "../util/apiURL"
const API = apiURL();

function Logs() {
    const [logs, setLogs] = useState([]);

    const getLogs = async () => {

        try {
            const res = await axios.get(`${API}/logs`);
            setLogs(res.data)
        } catch(error) {
            setLogs([])
            console.log(error)
        }

    }

    useEffect(() => {

        getLogs();

    }, [])

    return (
        <div className="Home">
            <ul>
                {logs.map((log, index)=>{
                   return  <li key={index}><Link to={`/logs/${index}`}>{log.title}</Link></li>
                })}
            </ul>
        </div>
    );
}

export default Logs;