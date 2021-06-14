import React from 'react';

const Log = ({log}) => {
    return (
        <div>
            <h3>{log.captainName}</h3>
            <h4>{log.title}</h4>
        </div>
    );
};

export default Log;