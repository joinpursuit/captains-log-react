import { Link } from "react-router-dom";

const FormatLog = ({ log, index }) => {
  return (
    <tr className="Log">
      <td>
      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.title} By - {log.captainName}</Link>
      </td>
      <td>
        <Link to={`/logs/${index}`}><img src="" alt="search-icon" height="15"/></Link>
      </td>
    </tr>
  );
}

export default FormatLog;