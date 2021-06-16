import React from 'react'
import { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid'

const LogEditForm =({updateLog, logs}) => {
  
  let { index } = useParams();
  let history = useHistory()
  const [ log, setLog ] = useState([])
  const prevLog = logs.length ? logs[index] : []


      const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        updateLog(log, index)
        history.push(`/logs/${index}`);
      };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="captainName" className="form-label mt-4">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          onChange={handleTextChange}
          placeholder={prevLog.captainName}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="title" className="form-label mt-4">Title:</label>
        <input
          id="title"
          type="text"
          placeholder={prevLog.title}
          className="form-control"
          onChange={handleTextChange}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="post" className="form-label mt-4">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          placeholder={prevLog.post}
          rows="3" 
          onChange={handleTextChange}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="daysSinceLastCrisis" className="form-label mt-4">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          onChange={handleTextChange}
          placeholder={prevLog.daysSinceLastCrisis}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="mistakesWereMadeToday" className="form-check-label">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="form-check-input"
          required
        />
        </div>
        <input type="submit" className="btn btn-success"/>
      </form>
      <br />
      <div className="modal-footer">
      <Link to={`/logs`} key={uuid()}>
        <button className=" btn btn-primary  btn-lg">Back</button>
      </Link>
      </div>
    </div>
  );
}

export default LogEditForm;
