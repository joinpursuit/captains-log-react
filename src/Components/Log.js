import { Link } from "react-router-dom";

const Log = ({ log, index }) => {
  return (
    <li>
      <Link to={`/logs/${index}`}>{log.title}</Link>
    </li>
  );
};

export default Log;