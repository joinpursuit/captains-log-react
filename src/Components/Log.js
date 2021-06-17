import { Link } from "react-router-dom";

function Log(props) {
    const { log, index } = props;
    return (
        <tr>
            <td>{index + 1}</td>
            
            <td>
            {log.mistakesWereMadeToday ? (<span>😞</span>) : (<span>🏆</span>)}{" "}{log.captainName}
            </td>
            
            <td>
                {log.title}
            </td>

            <td>
                {log.post}
            </td>

            <td>
                {log.daysSinceLastCrisis}
            </td>

            <td>
                <Link to={`/logs/${index}`}>✏️</Link>
            </td>
        </tr>
    )
}

export default Log
