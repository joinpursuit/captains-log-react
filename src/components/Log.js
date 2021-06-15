import React from 'react';

const Log = ({log, index}) => {
    return (
        <div>
            <h3>{log.captainName}</h3>
            <h4>{log.title}</h4>
            <h3>{log.post}</h3>
            <h3>{log.mistakesMadeToday}</h3>
            <h3>{log.daysSinceLastCrisis}</h3>
            <a href={`/logs/${index}`}>{log.title}</a>
        </div>
    );
};

export default Log;