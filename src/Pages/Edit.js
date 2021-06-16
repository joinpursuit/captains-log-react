import EditLog from "../Components/EditLog";

function Edit({ updateLog}) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <EditLog updateLog={updateLog} />
    </div>
  );
}

export default Edit;