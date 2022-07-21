import React from 'react';

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>{log.mistakesWereMadeToday ? <span>Yes</span> : <span>No</span>}</td>
      <td>
        <a href={`/logs/${index}`}>{log.captainName}</a>
      </td>
      <td>
        <a href={`/logs/${index}`}>{log.title}</a>
      </td>
    </tr>
  );
}

export default Log;
