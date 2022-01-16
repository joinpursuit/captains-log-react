import {useState, useEffect} from "react";
import Log from "./Log";
import axios from "axios";

const API_URL = process.env.REACT_APP_API;

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(()=> {
        axios.get(`${API_URL}/logs`)
             .then((res) => {
                setLogs(res.data)
             })
             .catch(err => {throw err})
    }, [])

    return(
        <div className="logs">
            <div className="table-content">
                <table className="table-logs">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Captain Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Logs;