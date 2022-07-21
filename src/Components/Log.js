import { Link } from "react-router-dom";

function Log({ log, idx }) {
  return (
    <tr>
      <td>{log.mistakesWereMadeToday ? "💥" : ""}</td>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${idx}`}>{log.title}</Link>
      </td>
    </tr>
  );
}
export default Log;
