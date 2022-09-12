import React from "react";
import { Link } from "react-router-dom";

export default function log({ log, index }) {
  return (
    <div>
      <tr className="Log">
        <td>{`${log.captainName}`}</td>
        <td>
          <Link to={`/logs/${index}`}>Show Log</Link>
        </td>
      </tr>
    </div>
  );
}
