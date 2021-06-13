import React from "react";
import { useParams } from "react-router-dom";
import LogDetails from "../components/LogDetails";

const Show = ({ logs }) => {
  const { index } = useParams();
  const log = logs[index];
  return (
    <div>
      <LogDetails log={log}/>
    </div>
  );
};

export default Show;
