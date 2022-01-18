import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";

function Logs() {
    const [logs, setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(`${URL}/logs`);
            setLogs(response.data)
        }
        fetchApi();
    }, []);

    return (
        <div>
            {logs.map((log, index) => {
                return <Log key={index} log={log} index={index}/>; 
            })}
        </div>
    );
}
export default Logs;