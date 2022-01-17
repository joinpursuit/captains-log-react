import './Log.css';
import { Link } from 'react-router-dom';

const Log = (props) => {
  const { mistakesWereMadeToday, captainName, title } = props.item;
  const { index } = props;
  const pink = index % 2 ? true : false;
  return (
    <tr className={'Log' + (pink ? ' pink' : '')}>
      <td>{mistakesWereMadeToday ? '💥' : ' '}</td>
      <td>{captainName}</td>
      <td>
        <Link to={'/logs/' + index}>{title}</Link>
      </td>
    </tr>
  );
};

export default Log;
