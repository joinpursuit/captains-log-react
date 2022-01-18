import { Link } from 'react-router-dom';
const Log = ({ log, index }) => {
  return (
    <tr>
      <td>{log.mistakesWereMadeToday ? 'yes' : 'no'}</td>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
};

export default Log;
