const Logs = ({ logsArr }) => {
  console.log(logsArr);
  return (
    <div>
      <h1>Captain's Log Index</h1>
      <ul>
        {logsArr.map((log, index) => {
          return (
            <li key={index}>
              <a href={`http://localhost:3000/logs/${index}`}>{log.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Logs;
