import Log from "./Log";

function Logs({ logs }) {
  return (
    <div className="Logs">
      <section>
        {logs.map((log, index) => {
          return <Log key={index} log={log} index={index} />;
        })}
      </section>
    </div>
  );
}

export default Logs;
