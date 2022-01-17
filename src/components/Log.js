import { Link } from "react-router-dom";
import "./Log.css";

const Log = (props) => {
  const { captainName, mistakesWereMadeToday, title } = props.log;
  const { id } = props;
  return (
    <div className="log">
      <div>{`${mistakesWereMadeToday}`}</div>
      <div>{captainName}</div>
      <Link to={`/logs/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Log;
