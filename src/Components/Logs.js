import Log from './Log'

const Logs = ({ log }) => {
  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {log.map((logs, index) => {
              return <Log key={index} logs={logs} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Logs;