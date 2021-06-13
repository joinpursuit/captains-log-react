import LogNewForm from "../Components/LogNewForm";

function New({ addLog }) {
  return (
    <section className="New">
      <h2>New</h2>
      <LogNewForm addLog={addLog} />
    </section>
  );
}

export default New;