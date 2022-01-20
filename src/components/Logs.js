import axios from "axios";
import { useEffect,useState } from "react";
import Log from "./Log";



function Logs(){
    const API = process.env.REACT_APP_API_URL;
    const [logs, setLogs] = useState([]);
    useEffect(()=>{
        axios.get(API + "/logs")
            .then((res)=>{
                setLogs(res.data);
                // console.log(res.data);
            }).catch((err)=>{
                throw err;
            })
    },[]);
    return(
        <div className="Logs">
            <section>
                        <div>
                            <span>Mistakes</span>
                            <span>Captain's Name</span>
                            <span>See this log</span>
                        </div>
                   
                    <div>
                        {logs.map((log, index)=>{
                            return <Log key={index} log={log} index={index}/>
                        })}
                    </div>
                
            </section>
        </div>
    )
}

export default Logs;
