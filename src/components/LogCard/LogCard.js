import './LogCard.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LogCard = () => {
  const { index } = useParams();
  const [log, setLog] = useState({});
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getLog = async () => {
      const logData = await axios.get(URL + '/logs/' + index);
      setLog(logData.data);
      console.log(logData.data);
    };
    getLog();
  }, []);
  const {
    captainName = 'Unknown',
    title = 'Unknown',
    post = 'Unknown',
    daysSinceLastCrisis = 'Unknown',
    mistakesWereMadeToday = 'Unknown',
  } = log;
  return (
    <div className="LogCard">
      <h2>{`${title} - By ${captainName}`}</h2>
      <h3>{`${post}`}</h3>
      <h4>{`Days since last crisis: ${daysSinceLastCrisis}`}</h4>
    </div>
  );
};

export default LogCard;