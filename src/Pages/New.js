import LogNewForm from "../Components/LogNewForm";

function New({ addLog }) {
  return (
    <div className="New">
      <h2>New Log</h2>
      <LogNewForm addLog={addLog} />
    </div>
  );
}

export default New;
