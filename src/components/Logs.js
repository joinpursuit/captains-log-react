import React from 'react'
import Log from './Log'
import { v4 as uuid } from 'uuid'

const Logs = ({ logs }) => {
  const logArray = logs.map((log, idx) => {
    return (
      <li>
        <Log key={uuid()} log={log} index={idx} />
      </li>
    )
  })
  return (
    <div>
      <div class='alert  alert-light'>
        <strong>
          <h3 className='text-primary'>Index</h3>
        </strong>
      </div>
      <div>
        <ul>{logArray}</ul>
      </div>
    </div>
  )
}

export default Logs
