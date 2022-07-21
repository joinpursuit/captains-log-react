import { useEffect } from "react"
import { useState } from 'react'

//fetch API here to get logs

const Logs = () => {
    //index page
    //needs to have conditionals for if there were any mistakes made per log
    //map through logs and list them individually
    
    const [logs, setLogs] = useState([])
    
    useEffect(() =>{
    const API = process.env.REACT_APP_API
    const allLogsRoute = `${API}logs`
fetch(allLogsRoute)
    .then((res) => res.json())
    .then((data) => {
        setLogs(data)
    })
    .catch((e) => {
        console.log(e);
      });
}, [])

console.log(logs)


    return (
        <div>
            {logs.map((log, index) => {
                return (
                    <div key={index}>
                        <h1>{log.captainName}</h1>
                        <h2>{log.title}</h2>
                        <h3>{log.post}</h3>
                        <h3>{log.mistakesWereMadeToday ? '💥' : 'no'}</h3>

                    </div>
                )
            })}
        </div>
    )
}

export default Logs