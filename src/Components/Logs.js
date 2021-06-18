import React from 'react';
import Log from './Log';


const Logs = ({ logs }) => {
    return (
        <div>
            <h1>Captain's Log</h1>
            <h2>Index</h2>
            {logs.map((log, index) => {
                return <Log key={index} log={log} index={index} />
            })}
        </div>
    )
}

export default Logs;