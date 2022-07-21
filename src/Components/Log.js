import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>{`${log.captainName}`}</td>
      <td>
        <Link to={`/logs/${index}`}>Show Log</Link>
      </td>
    </tr>
  );
}

export default Log;
