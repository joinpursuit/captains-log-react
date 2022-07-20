import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <div className="Log">
        <Link to={`/logs/${index}`}>{log.captainName}</Link>
      </div>
      <td>{log.title}</td>
    </tr>
  );
}

export default Log;
