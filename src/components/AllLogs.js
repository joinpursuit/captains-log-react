import {useState, useEffect} from "react";
import ShowLogs from "./ShowLogs";
import axios from "axios"
const API = process.env.REACT_APP_API_URL;

function AllLogs(){
    const [allLogs, setallLogs] = useState([]);

    useEffect(()=>{

        axios.get(`${API}/logs`)
        .then((res)=>{
            console.log(res)
            setallLogs(res.data)
        }).catch((err)=>{
            throw err;
        });
        // fetch(`${API}/logs`)
        // .then((res)=>res.json())
        // .then((data)=>{
        //   setallLogs(data)
        // }).catch((err)=>{
        //   throw err;
        // });
  
    },[])

    console.log(allLogs)
    let fetched = allLogs.map((log, index)=>{
        return (
            <tbody className="Log">
                <ShowLogs key={index} log={log} index={index} />
            </tbody>
        )
    })
    return(
        <section>
            <h1>Welcome to the Logs Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Mistakes</th>
                        <th>Captain Name</th>
                        <th>Show Page</th>
                    </tr>
                </thead>
                {fetched}
            </table>
        </section>
    )
}

export default AllLogs;