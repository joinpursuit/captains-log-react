
import LogEdit from "../Components/LogEdit";

function Edit({ updateLog }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <LogEdit updateLog={updateLog} />
    </div>
  );
}

export default Edit;