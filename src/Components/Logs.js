import Log from "./Log"

const  Logs = ({ logs }) => {
    return (
      <div className="Logs">
        <section>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Take me there</th>
                <th>See this log</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => {
                return <Log key={index} log={log} index={index} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }

export default Logs