import React from "react";

export default function Index(props) {
  const { logs } = props;
  const list = logs.map((elem) => {
    return <li>{elem.captainName}</li>;
  });
  return <div>{list}</div>;
}
