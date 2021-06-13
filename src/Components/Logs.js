const Logs = ({ logs }) => {
  return (
    <section>
      <ul>
        {logs.map((log, index) => {
          return <li key={log.title} index={index}><a href={`/logs/${index}`}>{log.title}</a></li>;
        })}
      </ul>
    </section>
  );
};

export default Logs;
