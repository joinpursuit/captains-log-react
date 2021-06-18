import React from 'react';

const Log = ({ log, index }) => {
    return (
        <li>
            <a href={`/logs/${index}`}>
                {log.title}
            </a>
        </li>
    )
}

export default Log;