import React from 'react'

import LogEditForm from '../components/LogEditForm'

function Edit ({ updateLog, logs }) {
  return (
    <div className='index'>
      <div className='alert  alert-light'>
        <strong>
          <h3 className='text-primary'>Edit</h3>
        </strong>
      </div>
        <LogEditForm updateLog={updateLog} logs={logs} />
    </div>
  )
}

export default Edit
