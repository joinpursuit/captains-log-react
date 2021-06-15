import React from 'react'

import LogEditForm from "../components/LogEditForm";

function Edit({ updateLog, logs }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <LogEditForm updateLog={updateLog} logs={logs} />
    </div>
  );
}

export default Edit;
