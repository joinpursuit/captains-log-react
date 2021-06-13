import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const LogDetails = (props) => {
  const { log } = props;
  // const [log, setLog] = useState([]);
  // let { index } = useParams();
  let history = useHistory();

  console.log(props);
  useEffect(() => {}, []);
  return (
    <section>
      <button onClick={history.goBack}>Go Back</button>
      <button>Delete</button>
      <table>
        <tr>
          <td>Captain's Name</td>
          <td>{log.captainName}</td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{log.title}</td>
        </tr>
        <tr>
          <td>Entry</td>
          <td>{log.post}</td>
        </tr>
        <tr>
          <td>Were mistakes made?</td>
          <td>{log.mistakesWereMadeToday ? <div>😱</div> : <div>😎</div>}</td>
        </tr>
        <tr>
          <td>Days since last crisis</td>
          <td>{log.daysSinceLastCrisis}</td>
        </tr>
      </table>
    </section>
  );
};

export default LogDetails;
