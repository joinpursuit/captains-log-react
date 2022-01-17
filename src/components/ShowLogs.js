import {Link} from "react-router-dom"

function ShowLogs({log, index}){
    
    return (
            <tr>
                <td>
                    {log.mistakesWereMadeToday ? (<span>True</span>) : (<span>False</span>)}
                </td>
                <td>
                    {log.captainName}
                </td>
                <td>
                    <Link to={`/logs/${index}`}>{log.title} : Show Page</Link>
                </td>
            </tr>
    )
}

export default ShowLogs
