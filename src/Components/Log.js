import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
      <section>
    {/* // <tr>
    //   <td> */}
        {log.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      {/* </td>
      <td> */}
        {/* <a href={log.url} target="_blank" rel="noreferrer">
          {log.title}
        </a> */}
      {/* </td>
      <td> */}
        <Link index={index} to={`/logs/${index}`}>{log.title}</Link>
      {/* </td>
    </tr> */}
    </section>
  );
}

export default Log;