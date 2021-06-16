import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LogNewForm = ({ addLog }) => {
  let history = useHistory()
  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0
  })

  const handleTextChange = event => {
    setLog({ ...log, [event.target.id]: event.target.value })
  }

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addLog(log)
    history.push('/logs')
  }
  return (
    <div>
      <div className='index'>
        <div className='alert  alert-light'>
          <strong>
            <h3 className='text-primary'>New</h3>
          </strong>
        </div>
      </div>
      <div className='New'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='captainName' className="form-label mt-4">Captain's Name:</label>
          <input
            id='captainName'
            type='text'
            className="form-control"
            onChange={handleTextChange}
            placeholder='Your name Captain'
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor='title' className="form-label mt-4">Title:</label>
          <input
            id='title'
            type='text'
            placeholder='Title...'
            onChange={handleTextChange}
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor='post' className="form-label mt-4">Post:</label>
          </div>
          <textarea
            id='post'
            type='text'
            name='post'
            placeholder='...'
            onChange={handleTextChange}
            required
          />
          
          <div className="form-group">
          <label htmlFor='daysSinceLastCrisis' className="form-label mt-4">Days Since Last Crisis</label>
          <input
            id='daysSinceLastCrisis'
            type='number'
            name='daysSinceLastCrisis'
            onChange={handleTextChange}
            placeholder='0'
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor='mistakesWereMadeToday' className="form-check-label">
            Mistakes were made today
          </label>
          <input
            id='mistakesWereMadeToday'
            type='checkbox'
            onChange={handleCheckboxChange}
            className="form-check-input"
          />
          </div>
          <input type='submit'className="btn btn-success" />
        </form>
      </div>
    </div>
  )
}

export default LogNewForm
