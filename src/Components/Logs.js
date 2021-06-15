import React from 'react'
import { Link } from "react-router-dom"

function Logs(props) {
    const { logs } = props 
    const logList = logs.map((log, i) => <li key={i}><Link to={`/logs/${i}`}>{log.title}</Link></li>)

    return (
        <div>
            <h3>Index</h3>
            <ul>
                {logList}
            </ul>
        </div>
    )
}

export default Logs
