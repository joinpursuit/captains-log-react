import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>{log.mistakesWereMadeToday ? <span>⭐️</span> : null}</td>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
