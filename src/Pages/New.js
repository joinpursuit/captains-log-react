import React from "react";
import NewLog from "../Components/NewLog";

function New({ addLog }) {
  return (
    <div>
      <NewLog addLog={addLog} />
    </div>
  );
}

export default New;
