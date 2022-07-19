function Log(props) {
  const { log, index } = props;
  return (
    <section>
      <div>{log.mistakesWereMadeToday ? "✅" : ""}</div>
      <div>{log.captainName}</div>
      <div>{log.title}</div>
    </section>
  );
}

export default Log;
