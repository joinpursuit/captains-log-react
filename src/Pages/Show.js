import LogDetails from "../Components/LogDetails";

function Show({ deleteLog }) {
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <LogDetails
          deleteLog={deleteLog}
        />
      </section>
    </div>
  );
}

export default Show;