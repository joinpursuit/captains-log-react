import React from 'react';
import Log from './Log'
import { v4 as uuid } from 'uuid'

const Logs = ({logs}) => {
    const logArray = logs.map(log =>{ 
        return (
                <li>
                    <Log key={uuid()} log={log}/>
                </li>)
     })
    return (
        <div>
            <ul>
            {logArray}
            </ul>
        </div>
    );
};

export default Logs;