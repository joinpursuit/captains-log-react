import { Link } from "react-router-dom";

function CaptainsLog({ log, index }) {
  return (
    <tr>
      {/* <td>Title: {note.title}</td> */}
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default CaptainsLog;
