import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
        <td>
        <Link to={`/logs/${index}`}> {log.captainName} - {log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;