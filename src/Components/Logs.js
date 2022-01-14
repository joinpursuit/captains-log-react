import { useState, useEffect } from "react"
import axios from "axios"
import Log from "./Log"

function Logs() {
    const [logs, setLogs] = useState([])
    const API = process.env.REACT_APP_API_URL

    useEffect(() => {
        axios.get(`${API}/logs`)
        .then((response) => {
            console.log(response.data)
            setLogs(response.data)
        })
        .catch((e) => {
            console.log('catch', e)
        })
    })    
    return (
        <div>
            <h2>Index</h2>
            <section>
                <table>
                <thead>
                    <tr>
                    <th>Mistakes</th>
                    <th>Captain Name</th>
                    <th>See this log</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => {
                    return <Log key={index} log={log} index={index} />;
                    })}
                </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs