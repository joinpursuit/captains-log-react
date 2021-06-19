import { Link } from "react-router-dom";
// import Logs from "../Pages/Logs";


export default function LogMap({logmap, index}) {
    const income = logmap.taxes + logmap.save + logmap.retirement + logmap.creditcard + logmap.market + logmap.internet + logmap.pet + logmap.car + logmap.insurrance + logmap.additional
    return (
        <tr className="table">
            <td>
                {logmap.mistakesWereMadeToday ?  (<span>⭐️</span>
                ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <p><strong>{logmap.captainName ? logmap.captainName : logmap.date}</strong></p>
                <p>{logmap.title}</p>
            </td>
            <td>
                <Link to={`/logs/${index}`}>✏️  ${income}</Link>
            </td>

            
        </tr>
    )
}
