import { useState, useEffect } from "react";
import FormatLog from "./FormatLog.js";
import axios from "axios";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({
    order:"",
    mistakesWereMadeToday:"",
    daysSinceLastCrisis:""
  })
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios.get(`${URL}/logs?order=${filter.order}&mistakesWereMadeToday=${filter.mistakesWereMadeToday}&daysSinceLastCrisis=${filter.daysSinceLastCrisis}`)
    .then((response) => {console.log(response.data); return setLogs(response.data)});
  }, [URL, filter.order, filter.mistakesWereMadeToday, filter.daysSinceLastCrisis]);

  const handleChange = (event) => {
    filter[event.target.name] !== event.target.value && setFilter({...filter, [event.target.name]: event.target.value})
  };

  return (
    <div className="Logs container p-5 my-5 bg-warning">
        <button
          className="btn btn-outline-primary mb-3"
          data-bs-toggle="collapse"
          data-bs-target="#demo">
          Filter
        </button>
      <form id="form" className="container mb-4" action="/logs" method="GET">
        <div
          id="demo"
          className="row collapse justify-content-center form-group text-primary text-center text-muted small">
            <label className="col-3" htmlFor="order">Sort by
              <select onChange={handleChange} className="form-control-sm bg-warning text-muted m-2" name="order">
                <option className="dropdown-item" value="">---</option>
                <option className="dropdown-item" value="asc">{`Name (Asc)`}</option>
                <option className="dropdown-item" value="desc">{`Name (Desc)`}</option>
              </select>
            </label>
            <label className="col-4" htmlFor="daysSinceLastCrisis">Days Since Last Crisis?
              <select onChange={handleChange} className="form-control-sm bg-warning text-muted m-2" name="daysSinceLastCrisis">
                <option className="dropdown-item" value="">---</option>
                <option className="dropdown-item" value="lte5">at most 5</option>
                <option className="dropdown-item" value="gt10">more than 10</option>
                <option className="dropdown-item" value="gte20">at least 20</option>
              </select>
            </label>
            <label className="col-4" htmlFor="mistakesWereMadeToday">Any Mistakes?
              <select onChange={handleChange} className="form-control-sm bg-warning text-muted m-2" name="mistakesWereMadeToday">
                <option className="dropdown-item" value="">---</option>
                <option className="dropdown-item" value="true">Yes</option>
                <option className="dropdown-item" value="false">No</option>
              </select>
            </label>
        </div>
      </form>
      <section>
        <table>
          <thead></thead>
          <tbody className="list-group">
            {logs.map((log) => {
              return <FormatLog key={log.id} log={log} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
