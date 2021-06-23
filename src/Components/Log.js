import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <div>
      <li key={index}>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </li>
    </div>
  );
}

export default Log;
