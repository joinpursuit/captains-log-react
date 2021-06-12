const Logs = ({ logs }) => {
  return (
    <section>
      <ul>
        {logs.map((log) => {
          return <li>{log.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default Logs;
