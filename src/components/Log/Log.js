import './Log.css';
import { Link } from 'react-router-dom';

const Log = (props) => {
  const { mistakesWereMadeToday, captainName, title } = props.item;
  const { index } = props;
  return (
    <div className="Log">
      <td><Link to={'/logs/' + index}>{mistakesWereMadeToday ? 'Yes' : 'No'}</Link></td>
      <td><Link to={'/logs/' + index}>{captainName}</Link></td>
      <td>
        <Link to={'/logs/' + index}>{title}</Link>
      </td>
    </div>
  );
};

export default Log;