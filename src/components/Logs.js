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
        <div classname="Logs">
            <section>
                <table>
                    <thed>
                        <tr>
                            <th>Mistakes</th>
                            <th>Captain's Name</th>
                            <th>See this log</th>
                        </tr>
                    </thed>
                    <tbody>
                        {logs.map((log, index)=>{
                            return <Log key={index} log={log} index={index}/>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs;
