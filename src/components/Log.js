import { Link } from 'react-router-dom';

function Log({ log, index }) {
    return (
        <div>
            <h2>{log.captainName}</h2>
            <Link to={`/logs/${index}`}>{log.title}</Link>
        </div>
    );
};

export default Log;
