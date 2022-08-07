import React from 'react'
import { useState, useEffect } from "react";
import Log from "./Log.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;
console.log(API)

function Logs() {
    const [ logs, setLogs ] = useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`${API}/logs`) // fetches data from API that is running as well
          .then((res) => { setLogs(res.data) }) // saves data to our hook
          .catch((err) => navigate('*'))
      }, [])

      return (
        <div className="Log-entries">
          <section>
            <table>
              <tbody>
                {logs.map((log, index) => {
                  console.log(log)
                  return <Log key={index} log={log} index={index} />
                })}
              </tbody>
            </table>
          </section>
        </div>
  )
}

export default Logs;
