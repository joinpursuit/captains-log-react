import { Link } from 'react-router-dom';

function Log({ log, index }) {
    return (
        <div>
            This is a log.
            {log.captainName}
            {log.title}
            {log.post}
            {log.mistakesWereMadeToday}
            {log.daysSinceLastCrisis}
            <p>
            <Link to={`/logs/${index}`}>✏️</Link>
            </p>
        </div>
    )
}

export default Log