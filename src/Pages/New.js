import NewLogsForm from "../Components/NewLogsForm";

function New({ addLog }) {
  return (
    <div className="New">
      <h2>New Log</h2>
      <NewLogsForm addBookmark={addLog} />
    </div>
  );
}

export default New;
