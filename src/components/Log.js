import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>{log.title}</td>
      <td>{log.captainName}</td>
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
