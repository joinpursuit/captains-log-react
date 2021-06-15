import { Link } from "react-router-dom";
// import Logs from "../Pages/Logs";


export default function LogMap({logmap, index}) {
    return (
        <tr className="table">
            <td>
                {logmap.mistakesWereMadeToday ?  (<span>⭐️</span>
                ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <p><strong>{logmap.captainName}</strong></p>
                <p>{logmap.title}</p>
            </td>
            <td>
                <Link to={`/logs/${index}`}>✏️</Link>
            </td>

            
        </tr>
    )
}
