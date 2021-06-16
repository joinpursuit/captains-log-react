import React from 'react'
import { v4 as uuid } from 'uuid'

const Log = ({ log, index }) => {

    const checked = log.mistakesWereMadeToday

  return (
    <div key={uuid()}>
      <div className='card border-primary mb-3' style={{maxWidth: "30rem", minHeight:"40rem"}}>
        <div className='card-header'>
          <h2>{log.captainName}</h2>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>
          {log.title}
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
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" key={uuid()} />
                    }
                    
                </div> 
            </li>
            <li className='list-group-item' key={uuid()}>
                <p className="card-text" style={{fontSize: "12px"}} key={uuid()}>Days Since Last Crisis</p>
                <div className='card-footer text-muted' style={{fontSize: "18px", textAlign:'center'}} key={uuid()}><h5 key={uuid()}>{log.daysSinceLastCrisis}</h5></div>
            </li>
            <div className='card-body logInList ' style={{fontSize: "16px"}} key={uuid()}>
                <div  className="btn btn-lg btn-light" key={uuid()}>
                  <a className="text-primary" style={{fontSize: "16px", textDecoration:"none"}}  href={`/logs/${index}`} key={uuid()}>
                    {log.title}
                  </a>
                </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Log
