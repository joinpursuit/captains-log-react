import LogEditForm from "../Components/LogEditForm";

function Edit({ updateLog }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <LogEditForm updateLog={updateLog} />
    </div>
  );
}

export default Edit;
