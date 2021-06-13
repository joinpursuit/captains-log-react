import { Link } from "react-router-dom";

const Log = ({ log, index }) => {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {/* <a href={log.title} target="_blank" rel="noreferrer"> */}
        <Link to={`/logs/${index}`}>{log.title}</Link>     
        {/* </a> */}
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;
