import { Link } from 'react-router-dom';

function Log({ log, index }) {
  return (
    <tr>
      <td>{log.captainName}</td>
      <div>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </div>
    </tr>
  );
}

export default Log;
