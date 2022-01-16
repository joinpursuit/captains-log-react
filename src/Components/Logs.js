import { useEffect, useState } from "react";
import axios from "axios"
import Log from "./Log"

export default function Logs() {
    const [logs, setLogs] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/logs`)
            .then((response) =>{
                setLogs(response.data)
            }).catch((err) => {
                throw err
            })
    })

    return(
        <div className="Logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Mistakes</th>
                            <th>Captain's Name</th>
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