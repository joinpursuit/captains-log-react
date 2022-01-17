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
    return <td key={index} index={index} className='Log'>
        
    <p>Captain Name:{eachLog.captainName}</p>
    <a href={`/logs/${index}`}>Post Title:{eachLog.title}</a>
    <p>Post Title:{eachLog.title}</p> 
    <p>Post:{eachLog.post}</p></td>;
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