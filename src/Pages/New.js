import LogNewForm from "../Components/LogNewForm";

function New({ addLog }) {
  return (
    <main className="New">
      <h2>New</h2>
      <LogNewForm addLog={addLog} />
    </main>
  );
}

export default New;