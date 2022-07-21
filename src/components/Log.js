import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      {/* {console.log(log)} */}
      <td>
        {log.captainName ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={log.captainName} target="_blank" rel="noreferrer">
          {log.captainName}
        </a>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;