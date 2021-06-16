import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LogDetails from './LogDetails'
import { v4 as uuid } from 'uuid'

function Show ({ deleteLog, logs }) {
  let { index } = useParams()
  const [log] = useState(logs[index])
  return (
    <div className='index'>
      <div className='alert  alert-light'>
        <strong>
          <h3 className='text-primary'>Show</h3>
        </strong>
      </div>
      <section className="centerLogs">
        <LogDetails log={log} index={index} deleteLog={deleteLog} key={uuid()}/>
      </section>
    </div>
  )
}

export default Show
