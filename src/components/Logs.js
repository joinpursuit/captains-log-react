import React from 'react';
import Log from './Log'
import { v4 as uuid } from 'uuid'

const Logs = ({logs}) => {
    const logArray = logs.map((log,idx) =>{ 
        return (
                <li>
                    <Log key={uuid()} log={log} index={idx}/>
                </li>)
     })
    return (
        <div>
            <h2>Index</h2>
            <ul>
            {logArray}
            </ul>
        </div>
    );
};

export default Logs;