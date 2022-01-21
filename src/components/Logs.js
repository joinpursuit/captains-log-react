import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log.js"

const API_URL = process.env.REACT_APP_API_URL;

function Logs () {
    const [logs, setLogs] = useState([])
    useEffect(()=> {
        // console.log(API_URL + "/logs")
        axios.get(API_URL + "/logs")
            .then((res) => {
                // console.log(res.data) 
                setLogs(res.data)
            }).catch((err) => {
                throw err
            })
    }, [])


    return(
        <div className="logs">
            <section>
                <table>
                    <thead>
                        <tr></tr>
                        <tr>Take me there</tr>
                        <tr>See this log</tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs;