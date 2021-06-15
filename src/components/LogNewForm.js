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
          <label htmlFor='captainName'>Captain's Name:</label>
          <input
            id='captainName'
            value={log.captainName}
            type='text'
            onChange={handleTextChange}
            placeholder='Your name Captain'
            required
          />
          <label htmlFor='title'>Title:</label>
          <input
            id='title'
            type='text'
            pattern='http[s]*://.+'
            required
            value={log.title}
            placeholder='Title...'
            onChange={handleTextChange}
          />
          <label htmlFor='post'>Post:</label>
          <textarea
            id='post'
            type='text'
            name='post'
            value={log.post}
            placeholder='...'
            onChange={handleTextChange}
          />
          <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
          <input
            id='daysSinceLastCrisis'
            type='number'
            name='daysSinceLastCrisis'
            value={log.daysSinceLastCrisis}
            onChange={handleTextChange}
            placeholder='0'
          />
          <br />
          <label htmlFor='mistakesWereMadeToday'>
            Mistakes were made today
          </label>
          <input
            id='mistakesWereMadeToday'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
          />
          <br />
          <input type='submit' />
        </form>
      </div>
    </div>
  )
}

export default LogNewForm
