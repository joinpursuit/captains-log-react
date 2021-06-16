import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory} from "react-router-dom";
import{ apiUrl } from '../util/apiURL'
import axios from "axios"
import { v4 as uuid } from 'uuid'

function LogDetails({deleteLog}){
    const API_BASE = apiUrl()

    const [ log, setLog ] = useState([])
    const [ checked, setChecked ] = useState(false)
    let { index } = useParams()
    let history = useHistory()


    useEffect(()=>{
        axios.get(`${API_BASE}/logs/${index}`)
        .then((response) =>{ 
            const { data } = response
            setLog(data)
            setChecked(data.mistakesWereMadeToday)
        }).catch((error) =>{
            history.push("/not-found")
        })
    },[index, history])

    const handleDelete = () => { 
        deleteLog(index)
        history.push("/logs")
     }

    return (
        <div>
        <div className='card border-primary mb-3' style={{minWidth: "70rem", minHeight:"40rem"}}>
          <div className='card-header'>
            <h2>Captain's Log [ {index} ]</h2>
          </div>
          <div className='card-body'>
            <h3 className='card-title'>
            {log.title} - By {log.captainName}
            </h3>
            <ul className='list-group list-group-flush' key={uuid()}>
              <li className='list-group-item' key={uuid()}>
                  <p className="card-text" style={{fontSize: "14px", minHeight:"70px"}} key={uuid()}>
                      {log.post}
                  </p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center " key={uuid()}>
                   <div className="form-check" key={uuid()}>
                      <label className="form-check-label text-warning" htmlFor="flexCheckChecked" style={{fontSize: "12px"}} key={uuid()}>
                          Mistakes were made Today
                      </label>
                      {checked ? <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" key={uuid()} defaultChecked /> :
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" key={uuid()} />}
                      
                  </div> 
              </li>
              <li className='list-group-item' key={uuid()}>
                  <p className="card-text" style={{fontSize: "16px"}} key={uuid()}>Days since last crisis: {log.daysSinceLastCrisis}</p>
              </li>
              <div className="modal-body d-flex w-50 justify-content-around" key={uuid()}>
              <Link to={`/logs`} key={uuid()}>
                      <button type="button" className="btn btn-lg btn-outline-primary" style={{fontSize: "14px"}} key={uuid()}>
                      Back
                      </button>
              </Link>
                  <Link to={`/logs/${index}/edit`} key={uuid()}>
                      <button type="button" className="btn btn-lg btn-outline-primary" style={{fontSize: "14px"}} key={uuid()}>
                      Edit
                      </button>
                  </Link>
              </div>
              <div className="modal-footer" key={uuid()}>
                <button onClick={handleDelete} type="button" className="btn btn-outline-primary" style={{fontSize: "14px"}} key={uuid()}>Delete</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default LogDetails