import Log from "./Log";
import "./Logs.css"

function Logs({ logs }) {
  return (
    <div className="Logs">
      <section>
   
        <ul>
        <h1>Captain's Log</h1>
          {/* <thead> */}
            {/* <tr> */}
       
            
              {/* <th>See this log</th> */}
            {/* </tr>
          </thead> */}
          <li className="log-title">
            {logs.map((log, index) => {
              return <h3><Log key={index} log={log} index={index} /></h3>;
            })}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Logs;