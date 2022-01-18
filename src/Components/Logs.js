import axios from "axios"
import Log from "./Log"
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'

const URL = process.env.REACT_APP_URL
console.log(URL)

const Logs = () => {
    const [logs, setLogs] = useState([])

    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs`)
            console.log(data)
            setLogs(data)
        }
        FetchData()
    }, [])
    return (
        <div className="Logs">
        <h1>Index</h1>
        <section>
        <table>
          <thead>
          <tr>
                <th>Mistakes</th>
                <th>Captain Name</th>
                <th>See this log</th>
          </tr>
          </thead>
            <tbody>
              {logs.map((log, index) => {
                return <Log key={index} log={log} index={index} />;
              })}
            </tbody>
        </table>
        </section>
      </div>
    )
}

export default Logs