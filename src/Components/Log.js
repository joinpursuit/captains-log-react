import { Link } from "react-router-dom";

function Log({log, index}) {
    return (
        <tr className="Log">
          
        <td>
            <h1>💣</h1> 
        </td>
        <td>{log.captainName}</td>
            <td><Link to={`/logs/${index}`}>{log.title}</Link></td>
        </tr>
    )
}

export default Log
