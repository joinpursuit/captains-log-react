import {useState, useEffect} from "react";
import ShowLogs from "./ShowLogs";
const API = process.env.REACT_APP_API_URL;
// path /logs - list of all the logs rendered on this page
// display list of titles , onclick to /log/:index

// user can click on one log and see more details.
// re route to to /logs/:index ? 

function AllLogs(){
    const [allLogs, setallLogs] = useState([]);

    useEffect(()=>{

        // axios.get(`http://localhost:8888/logs`)
        // .then((res)=>{
        //     console.log(res)
        //     setallLogs(res.data)
        // }).catch((err)=>{
        //     throw err;
        // });
        fetch(`${API}/logs`)
        .then((res)=>res.json())
        .then((data)=>{
          setallLogs(data)
        }).catch((err)=>{
          throw err;
        });
  
    },[])

    console.log(allLogs)
    let fetched = allLogs.map((log, index)=>{
        return (
            <div>
                <ShowLogs key={index} log={log} index={index} />
            </div>
        )
    })
    return(
        <div>
            <h1>Welcome to the Logs Page</h1>
            <div>{fetched}</div>
        </div>
    )
}

export default AllLogs;