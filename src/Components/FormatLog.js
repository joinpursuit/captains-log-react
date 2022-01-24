import { Link } from "react-router-dom";
import searchIMG from "./search.png"

const FormatLog = ({ log }) => {
  return (
      <tr className="Log list-group list-group-horizontal gap-2 rounded ms-5 mb-3">
          <td>
            <Link className="list-group-item bg-success" to={`/logs/${log.id}`}><img src={searchIMG} alt="search-icon" height="15"/></Link>
          </td>
          <td>
            <Link className="list-group-item" to={`/logs/${log.id}`}>{log.title} By - {log.captainName}</Link>
          </td>
      </tr>
  );
}

export default FormatLog;
