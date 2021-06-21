import { useState } from 'react'
import { withRouter } from 'react-router-dom'

const NewLog = (props) => {
  const [logs, setLogs] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0
  })

  const handleTextChange = (e) => {
    setLogs({ ...logs, [e.target.id]: e.target.value})
  }

  const handleCheckboxChange = () => {
    setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
	props.addLog(logs)
    props.history.push('/logs')
  }

  return (
		<div className='New'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='captainName'>Captain's Name</label>
				<input
					id='captainName'
					value={logs.captainName}
					type='text'
					placeholder='Captain Name'
					onChange={handleTextChange}
				/>
				<label htmlFor='title'>Title</label>
				<input
					id='title'
					value={logs.title}
					type='text'
					placeholder='Title'
					onChange={handleTextChange}
				/>
				<label htmlFor='post'>Post</label>
				<textarea
					id='post'
					value={logs.post}
					type='text'
					placeholder='Post'
					onChange={handleTextChange}
				/>
				<label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
				<input
					id='mistakesWereMadeToday'
					type='checkbox'
					onChange={handleCheckboxChange}
					checked={logs.mistakesWereMadeToday}
				/>
				<label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
				<input
					id='daysSinceLastCrisis'
					value={logs.daysSinceLastCrisis}
					type='number'
					placeholder='Days Since Crisis'
				/>
				<input type='submit' />
			</form>
		</div>
  )
};

export default withRouter(NewLog);
