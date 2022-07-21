import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{log.captainName}</td>
      <div className="Log">
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </div>
    </tr>
  );
}

 