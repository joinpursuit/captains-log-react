function LogsDisplay({ index, log }) {
  return (
    <div>
      <p>Captain Name: {log.captainName}</p>
      <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
      <p>{log.mistakesWereMadeToday}</p>
      <p>{log.post}</p>
      <p>Title: {log.title}</p>
    </div>
  );
}

export default LogsDisplay;
