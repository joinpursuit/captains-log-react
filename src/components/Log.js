import React from 'react'

const Log = ({ log, index }) => {
  return (
    <div>
      <div className='card border-primary mb-3' style={{maxWidth: "30rem", minHeight:"40rem"}}>
        <div className='card-header'>
          <h2>{log.captainName}</h2>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>
          {log.title}
          </h3>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
                <p className="card-text" style={{fontSize: "14px", minHeight:"70px"}}>
                    {log.post}
                </p>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ">
                 <div className="form-check">
                    <label className="form-check-label text-warning" for="flexCheckChecked" style={{fontSize: "12px"}}>
                        Mistakes were made Today
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={log.mistakesMadeToday} />
                </div> 
            </li>
            <li className='list-group-item'>
                <p className="card-text" style={{fontSize: "12px"}}>Days Since Last Crisis</p>
                <div className='card-footer text-muted' style={{fontSize: "18px", textAlign:'center'}}><h5>{log.daysSinceLastCrisis}</h5></div>
            </li>
            <div className='card-body logInList ' style={{fontSize: "16px"}}>
                <button type="button" className="btn btn-lg btn-light"><a className="text-primary" style={{fontSize: "16px", textDecoration:"none"}}  href={`/logs/${index}`}>{log.title}</a></button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Log
