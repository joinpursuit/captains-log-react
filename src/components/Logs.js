import { useState, useEffect } from "react";
import CaptainsLog from "./CaptainsLog";
import axios from "axios";

function Logs() {
  // HOOKS NEED TO BE CALLED IN SAME ORDER AS CREATED
  const [log, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const result = async () => {
      // console.log("we hit useEffect!");
      const response = await axios.get(`${URL}/logs`);
      setLogs(response.data);
      console.log(response);
      console.log(response.data);
    };
    result();
  }, []);
  return (
    <div className="CaptainsLog">
      <section>
        {log.map((notes, i) => {
          return <CaptainsLog key={i} note={notes} index={i} />;
        })}
      </section>
    </div>
  );
}

export default Logs;
