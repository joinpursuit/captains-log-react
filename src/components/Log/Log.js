import './Log.css';
import { Link } from 'react-router-dom';

const Log = (props) => {
  const { mistakesWereMadeToday, captainName, title } = props.item;
  const { index } = props;
  return (
    <div className="Log">
      <td>{mistakesWereMadeToday ? 'Yes' : 'No'}</td>
      <td>{captainName}</td>
      <td>
        <Link to={'/logs/' + index}>{title}</Link>
      </td>
    </div>
  );
};

export default Log;
