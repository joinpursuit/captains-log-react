import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.captainName ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td className="Log">
        <a href={`/logs/${index}`} target="_blank" rel="noreferrer">
          {log.captainName}
        </a>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

