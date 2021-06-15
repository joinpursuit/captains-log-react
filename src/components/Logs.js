import React from 'react'
import Log from './Log'
import { v4 as uuid } from 'uuid'

const Logs = ({ logs }) => {
  const logArray = logs.map((log, idx) => {
    return (
      <div className="logInList">
          <Log key={uuid()} log={log} index={idx} />
      </div>
    )
  })
  return (
    <div className='index'>
      <div className='alert  alert-light'>
          <strong><h3 className='text-primary'>Index</h3></strong>
      </div>
      <div className="centerLogs">
          <div className='logs'>
            {logArray}
          </div>
      </div>
    </div>
  )
}

export default Logs
