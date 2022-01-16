import { Link } from "react-router-dom";

function CaptainsLog({ log, index }) {
  return (
    <tr>
      <Link to={`/logs/${index}`}>🌟 {log.title}</Link>
    </tr>
  );
}

export default CaptainsLog;
