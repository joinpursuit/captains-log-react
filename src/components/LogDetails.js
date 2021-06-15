import React from 'react'
import { Link, useParams, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import{ apiUrl } from '../util/apiURL'
import axios from "axios"

const Show = ({deleteLog}) => {
    const API_BASE = apiUrl()

    const [ log, setLog ] = useState([])
    let { index } = useParams()
    let history = useHistory()


    useEffect(()=>{
        axios.get(`${API_BASE}/logs/${index}`)
        .then((response) =>{ 
            const { data } = response
            setLog(data)
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
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                  <p className="card-text" style={{fontSize: "14px", minHeight:"70px"}}>
                      {log.post}
                  </p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center ">
                   <div className="form-check">
                      <label className="form-check-label text-warning" htmlFor="flexCheckChecked" style={{fontSize: "12px"}}>
                          Mistakes were made Today
                      </label>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={log.mistakesMadeToday} />
                  </div> 
              </li>
              <li className='list-group-item'>
                  <p className="card-text" style={{fontSize: "16px"}}>Days since last crisis: {log.daysSinceLastCrisis}</p>
              </li>
              <div className="modal-body d-flex w-50 justify-content-around">
                  <Link to={`/logs`}>
                      <button type="button" className="btn btn-lg btn-outline-primary" style={{fontSize: "14px"}}>
                        Back
                      </button>
                  </Link>
                  <Link to={`/logs/${index}/edit`}>
                      <button type="button" className="btn btn-lg btn-outline-primary" style={{fontSize: "14px"}}>
                        Edit
                      </button>
                  </Link>
              </div>
              <div className="modal-footer" >
                <button onClick={handleDelete} type="button" className="btn btn-outline-primary" style={{fontSize: "14px"}}>Delete</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Show;