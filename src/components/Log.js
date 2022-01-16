import {Link} from "react-router-dom";

function Log({log, index}) {

    let {captainName, title} = log;


    return(
            <tr className="each-log">
                <td>{index}</td>
                <td>{title}</td>
                <td>{captainName}</td>
                <td className="td-link"><Link to={`/logs/${index}`}>more info</Link></td>
            </tr>
    )
}

export default Log;