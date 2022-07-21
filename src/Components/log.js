import { Link } from 'react-router-dom';
function Log({ log, arrayIndex }) {
  return (
    <tr>
      <td>
        {log.madeMistake ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td>
        <a href={log.url} target='_blank' rel='noreferrer'>
          {log.name}
        </a>
      </td>
      <td>
        <Link to={`/logs/${arrayIndex}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;
