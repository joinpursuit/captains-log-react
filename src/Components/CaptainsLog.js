import { Link } from "react-router-dom";

function CaptainsLog({ log, index }) {
  return (
    <tr>
      <td>Captain: {log.captainName}</td>
      <Link to={`/logs/${index}`}>🌟</Link>
    </tr>
  );
}

export default CaptainsLog;
