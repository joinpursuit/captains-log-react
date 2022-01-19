

const Log = ({log, index}) => {
    return (
        <tr className="Log">
        <td>
          <div>{log.captainName}</div>
        </td>
        <td>
          <a href={`/logs/${index}`} rel="noreferrer">
            {log.title}
          </a>
        </td>
      </tr>
    );
}
export default Log;