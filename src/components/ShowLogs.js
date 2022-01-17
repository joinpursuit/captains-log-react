import {Link} from "react-router-dom"

function ShowLogs({log, index}){
    
    return <h3><Link to={`/logs/${index}`}>{log.title} : Show Page</Link></h3>
}

export default ShowLogs
