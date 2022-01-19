import { Link } from "react-router-dom";
import "./Log.css";

const Log = (props) => {
  const { captainName, mistakesWereMadeToday, title } = props.log;
  const { id } = props;
  return (
    <tr className="Log">
      <td>{`${mistakesWereMadeToday}`}</td>
      <td>{captainName}</td>
      <td>
        <Link to={`/logs/${id}`}>
          <h3>{title}</h3>
        </Link>
      </td>
    </tr>
  );
};

export default Log;
