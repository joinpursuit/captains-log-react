import { useState, useEffect } from "react";
import FormatLog from "./FormatLog.js";
import axios from "axios"

function Logs() {
    const [logs, setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      axios.get(URL+"/logs")
        .then((response) => setLogs(response.data))
    }, [URL])
  
    // const handleSort = () => {

    // }

    return (
      <div className="Logs container p-5 my-5 bg-warning">
        <section>
          <table>
            <thead>
            </thead>
            <tbody className="list-group">
              {logs.map((log, index) => {
                return <FormatLog key={index} log={log} index={index} />;
              })}
            </tbody>
          </table>
        </section>
        <button 
          className="btn btn-outline-primary mt-3"
          data-bs-toggle="collapse" 
          data-bs-target="#demo">
            Sort
        </button>
        <div id="demo" className="container-fluid collapse form-check text-primary text-center">
            <input className="p-2" type="radio" id="title" name="sortBy"/>
            <label className="p-2">Title</label>
            <input className="p-2" type="radio" id="name" name="sortBy"/>
            <label className="p-2">Name</label>
        </div>
      </div>
    );
  }
  
  export default Logs;