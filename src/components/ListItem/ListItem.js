import './ListItem.css';
const ListItem = (props) => {
  const { mistakesWereMadeToday, captainName, title } = props.item;
  return (
    <div className="ListItem">
      <h4>{mistakesWereMadeToday ? 'Yes' : 'No'}</h4>
      <h4>{captainName}</h4>
      <h4>{title}</h4>
    </div>
  );
};

export default ListItem;