import React from 'react';
import Log from './Log';

const Logs = ({ logs }) => {
    return (
        <div>
            {logs.map((log, index) => {
                return <Log key={index} log={log} index={index}/>
            })}
        </div>
    )
}

export default Logs
