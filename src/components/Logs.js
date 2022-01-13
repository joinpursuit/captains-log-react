import React, { useEffect, useState } from 'react';
import Log from './Log';
import axios from 'axios';

function Logs() {

    // const [data, setData] = useState(0)
    const [logs, setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;


    useEffect(() => {
        axios.get(`${URL}/logs`)
        .then((response) => {
            setLogs(response.data);
        })
        .catch((e) => console.log('catch', e));
        }, []);
     
    return (
            <div>
                This is all the logs
                {logs.map((log, index) => {
                    return <Log key={index} log={log} index={index} />;
                })}
            </div>
        )
    }

export default Logs