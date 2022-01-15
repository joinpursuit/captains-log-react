import { Link } from "react-router-dom";

function Log({ log, index }) {
    return (
        <tr>
            <td>
                {log.mistakesWereMade ? (
                <span>💥</span>
                ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <a href={log.url} target="_blank" rel="noreferrer">
                {log.captainName}
                </a>
            </td>
            <td>
                <Link to={`/logs/${index}`}>{log.name}</Link>
            </td>
        </tr>
    );
}

export default Log;