import './Show.css';
import LogCard from '../LogCard/LogCard';
import Buttons from '../Buttons/Buttons';
const Show = () => {
  return (
    <div className="Show">
      <h2 className="showTitle">Show</h2>
      <LogCard />
      <Buttons />
    </div>
  );
};

export default Show;
