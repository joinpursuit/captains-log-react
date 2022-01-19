import { useState, useEffect } from "react";
import Log from "./Log"
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Logs() {
    const [logs, setLogs] = useState([]);
    
    useEffect(()=>{
        axios.get(`${API_URL}/logs`)
          .then((res)=>{
          
            console.log(res)
            console.log(res.data)
            setLogs(res.data)
          }).catch((err)=>{
            throw err
          });
    
    
      }, []);
    

    return(
        <div className="Logs">
            <p>Here are all the logs</p>
            <p> {logs.map((log, index) => {
                    return <Log key={index} log={log} index={index} />;
                })}
            </p>
        </div>
    )

}

export default Logs;