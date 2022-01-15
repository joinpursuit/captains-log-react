import {useEffect, useState} from "react"
import Log from "./Log"
import axios from "axios"

function Logs(){
    const [logs, setLog] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API}/logs`);
            setLog(response.data);
        };
        fetchData();
    }, []);
    

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
  );
}

export default Logs;