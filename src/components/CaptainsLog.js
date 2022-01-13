import { Link } from "react-router-dom";

function CaptainsLog({ note, index }) {
  return (
    <div>
      <Link to={`/logs/${index}`}>{note.title}</Link>
    </div>
  );
}

export default CaptainsLog;
