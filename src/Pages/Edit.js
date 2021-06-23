import LogEditForm from "../Components/LogEditForm";

function Edit({ updateLog, logs }) {
  return (
    <div className="New Edit">
      <h2>Edit Form</h2>
      <LogEditForm updateLog={updateLog} logs={logs} />
    </div>
  );
}

export default Edit;
