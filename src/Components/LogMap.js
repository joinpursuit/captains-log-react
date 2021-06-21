import { Link } from "react-router-dom";

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
                <p><strong>{logmap.captainName ? logmap.captainName : null}</strong></p>
                <p>{logmap.title}</p>
            </td>
            <td>
                <Link to={`/logs/${index}`}> ✏️</Link>
            </td>

            
        </tr>
    )
}
