import React from "react";

export default function Index(props) {
  const { logs } = props;
  const list = logs.map((elem, i) => {
    return (
      <li key={i}>
        <a href={`http://localhost:3000/logs/${i}`}>{elem.title}</a>
        <div>{elem.captainName}</div>
        <div>{elem.post}</div>
        <div>{elem.mistakesWereMadeToday + " "}</div>
        <div>{elem.daysSinceLastCrisis}</div>
      </li>
    );
  });
  return (
    <div>
      <h1>Captain's Log</h1>
      <h2>Index</h2>
      <ul>{list}</ul>;
    </div>
  );
}
