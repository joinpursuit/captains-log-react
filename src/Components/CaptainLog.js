import { Link } from "react-router-dom";

const CaptainLog = ({ captainLog, index }) => {
  return (
    <li key={captainLog.id}>
      <Link to={`/logs/${index}`}>{captainLog.title}</Link>
    </li>
  );
};

export default CaptainLog;
