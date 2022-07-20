import { Link } from 'react-router-dom'

function log({ log, index }) {
  return (
    <tr>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  )
}

export default log
