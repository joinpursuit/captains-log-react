import LogNew from "../Components/LogNew";

function New({ addLog }) {
  return (
    <div className="New">
      <h2>New</h2>
      <LogNew addLog={addLog} />
    </div>
  );
}

export default New;