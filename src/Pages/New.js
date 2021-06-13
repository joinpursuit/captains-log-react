import NewLogsForm from "../Components/NewLogsForm";

function New({ addLog }) {
  return (
    <div className="New">
      <h2>New Log</h2>
      <NewLogsForm addLog={addLog} />
    </div>
  );
}

export default New;
