import Log from "./Log";

function Logs({ logs }) {
  return (
    <div>
      <h1>Captain's Log Index</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Take Me There</th>
            <th>See This Log</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {logs.map((log, i) => {
          return <Log key={i} log={log} i={i} />;
        })}
      </tbody>
    </div>
  );
}

export default Logs;
