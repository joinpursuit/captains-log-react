import { useState } from "react";
import { useParams } from "react-router";
import LogDetails from "../Components/LogDetails";

const Show = ({ logs }) => {
  let { index } = useParams();
  const [log] = useState(logs[index]);
  return (
    <main>
      <h1>Show</h1>
      <LogDetails log={log} index={index} />
    </main>
  );
};

export default Show;
