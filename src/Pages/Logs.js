import Log from "../Components/Log";
import { useState, useEffect } from "react";
import axios from "axios";

function Logs () {
    const [ allLogs, setAllLogs ] = useState([]);
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}`)
        .then(res => {
            console.log(res.data)
            setAllLogs(res.data);
        })
    },[])

    return (
        <div className="All-Logs">
            <table>
                <tr>
                    <th>Mistakes</th>
                    <th>Captain Name</th>
                    <th>See this log</th>
                </tr>
                {allLogs.map((log, index) => {
                    return<Log key={index} log={log} index={index} />;
                })}
            </table>
        </div>
    )
}

export default Logs;