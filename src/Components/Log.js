import { Link } from "react-router-dom";

function Log(props) {
  const { log, index } = props;
  return (
    // <section>
    //   <div>{log.mistakesWereMadeToday ? "✅" : ""}</div>
    //   <div>{log.captainName}</div>
    //   <div>{log.title}</div>
    // </section>
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{log.captainName}</td>
      <td>{log.title}</td>
    </tr>
  );
}

export default Log;
