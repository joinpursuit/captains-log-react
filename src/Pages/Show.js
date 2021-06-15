import LogDetails from "../Components/LogDetails";

function Show({ deleteLog ,logs, show }) {
  return (
    <div className="Show">
      <h2>Show</h2>

      <section>
        <LogDetails
          deleteLog={deleteLog} allLogs={logs} show={show}
        />
      </section>
    </div>
  );
}

export default Show;