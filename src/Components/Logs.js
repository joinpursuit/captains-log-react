import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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
    <Link to={`/logs/${index}`}>Captain Name:{eachLog.captainName}</Link>
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