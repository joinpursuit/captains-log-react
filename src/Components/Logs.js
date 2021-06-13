const Logs = ({ logs }) => {
  return (
    <section>
      <ul>
        {logs.map((log) => {
          return <li><a href="/logs/:index">{log.title}</a></li>;
        })}
      </ul>
    </section>
  );
};

export default Logs;
