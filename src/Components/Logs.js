import Log from "./Log";

function Logs({ logs }) {
  return (
    <div className="Logs">
      <section>
   
        <ul>
        <h1>List of logs</h1>
          {/* <thead> */}
            {/* <tr> */}
       
            
              {/* <th>See this log</th> */}
            {/* </tr>
          </thead> */}
          <li>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Logs;