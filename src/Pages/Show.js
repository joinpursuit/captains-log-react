import LogDetails from "../Components/LogDetails";

function Show({ deleteLog ,logs, show }) {
  return (
    <div className="Show">
      <h1>Show</h1>
      <h2>Captain's Log</h2>

      <section>
        <LogDetails
          deleteLog={deleteLog} allLogs={logs} show={show}
        />
      </section>
    </div>
  );
}

export default Show;