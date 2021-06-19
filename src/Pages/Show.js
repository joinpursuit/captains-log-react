import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LogDetails from "../Components/LogDetails";

function Show({ deleteLog, logs }) {
  let { i } = useParams();
  const [log] = useState(logs[i]);
  return (
    <div>
      <h1>Show Captain's Log</h1>
      <LogDetails log={log} i={i} deleteLog={deleteLog} />
    </div>
  );
}

export default Show;
