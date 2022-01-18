import { Link } from "react-router-dom";
import searchIMG from "./search.png"

const FormatLog = ({ log, index }) => {
  return (
      <tr className="Log row list-group list-group-horizontal justify-content-between gap-5 rounded">
        <td>
          <td>
            <Link className="list-group-item" to={`/logs/${index}`}><img src={searchIMG} alt="search-icon" height="15"/></Link>
          </td>
          <td>
            <Link className="list-group-item" to={`/logs/${index}`}>{log.title} By - {log.captainName}</Link>
          </td>
        </td>
      </tr>
  );
}

export default FormatLog;
