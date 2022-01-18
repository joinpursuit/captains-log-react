import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
      <br />
        Name: {log.captainName}<br />
        Title: {log.title}<br />
        {/* Post: {log.post}<br /> */}
        {/* Days Since Last Crisis: {log.daysSinceLastCrisis}<br /> */}
      </td>
      <td>
        <Link to={`/logs/${index}`}></Link>
      </td>
    </tr>
  );
}

export default Log;