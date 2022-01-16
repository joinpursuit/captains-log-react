import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log a">
      <td>{log.captainName}</td>
      <td>{log.title}</td>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>☑️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;
