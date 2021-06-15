import { useState } from "react";
import { useParams } from "react-router-dom";
import Logsapi from "../Components/Logsapi.js";

function Show({ deletelogs, log }) {
  let { index } = useParams();
  const [logs] = useState(log[index]);
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <Logsapi
          logs={logs}
          index={index}
          deletelogs={deletelogs}
        />
      </section>
    </div>
  );
}

export default Show;