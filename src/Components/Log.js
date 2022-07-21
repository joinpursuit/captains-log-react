import { Link } from 'react-router-dom';

function Log({ log, index }) {
  const mistakes = log.mistakesWereMadeToday ? (
    <span>🌟</span>
  ) : (
    <span>&nbsp; &nbsp; &nbsp;</span>
  );
  return (
    <tr className='Log'>
      <td>{mistakes}</td>
      <td>
        {/* <a href={log.captainName} target='_blank' rel='noreferrer'> */}
        {log.captainName}
        {/* </a> */}
      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
