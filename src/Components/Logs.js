import { useState, useEffect } from 'react'
import Log from './Log.js';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/logs")
        .then((res)=>{
            console.log(res.data)
            setLogs(res.data)
        }).catch((err)=>{
            throw err;
        })
    }, []);

    return (
        <div className='Logs'>
            <h3>see this log</h3>
            <table>

            <thead>

            <tr>
                <th scope="col">Mistakes</th>
                <th scope="col">Captain Name</th>
                <th scope="col">See this log</th>
            </tr>
            </thead>
            <tbody>
                {logs.map((log, index)=>{
                    return <Log key={index} log={log} index={index} />
                })};
            </tbody>
            </table>
        </div>
    )
}

export default Logs