import { Link } from "react-router-dom";

export default function Log(props) {
  const { log, index } = props;
  
  return (
    <tr className="Log">
      <td>
        <Link to={`/logs/${index}`}>{log.title} </Link>
      </td>
      <td>{log.captainName}</td>
      <td>
        {log.mistakesWereMadeToday ? (
          <span className="success">Yes</span>
        ) : (
          <span className="error">No</span>
        )}
      </td>
    </tr>
  );
}