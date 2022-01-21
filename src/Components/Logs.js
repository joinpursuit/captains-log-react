import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";
import { Table } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);
  const API_URL=process.env.REACT_APP_API_URL;
  useEffect(()=>{
    axios.get(API_URL + "/logs")
    .then((res)=>{
      setLogs(res.data);
    }).catch((err)=>{
      throw err;
    })

    // fetch(API_URL + "/logs")
    //   .then((res)=>{
    //     return res.json();
    //   }).then((data)=>{
    //     setLogs(data);
    //   }).catch((err)=>{
    //     throw err
    //   })
  }, []);

  return (
    <div className="Logs">
      <section>
        <Table>
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
        </Table>
      </section>
    </div>
  );
};

export default Logs;