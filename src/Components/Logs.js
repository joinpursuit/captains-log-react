import axios from 'axios';
import { useEffect, useState } from "react";

function Log() {
    const [logs,setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;

    useEffect(()=> {
        axios.get(`${URL}/logs`).then(
        (response)=>{
        setLogs(response.data)   
        })
    }, [URL])


const logFile = logs.map((eachLog, index) => {
    return <li key={index} index={index}>
    <p>Captain Name:{eachLog.captainName}</p>
    <p>Post Title:{eachLog.title}</p> 
    <p>Post:{eachLog.post}</p></li>;
})

return (
    <p>
<ul>     
{logFile}
</ul>
    </p>
)
}

export default Log;