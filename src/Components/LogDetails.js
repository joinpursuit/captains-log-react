import { useState, useEffect } from 'react'
import { Link, useParams, useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL'

const API_BASE = apiURL()

const LogDetails = (props) => {
  const { deleteLog } = props
	const [logs, setLogs] = useState([])
	let { index } = useParams()

	let history = useHistory()

	useEffect(() => {
		axios
			.get(`${API_BASE}/logs/${index}`)
			.then((res) => {
				const { data } = res
				setLogs(data)
			})
			.catch((e) => {
				history.push('/not-found')
			})
	}, [index, history])

  const handleDelete = () => {
    deleteLog(index)
    history.push('/logs')
  }

	return (
		<article>
			<h3>
				<h5>
					<span>
						{logs.title} - By {logs.captainName}
					</span>
				</h5>
				<h6>{logs.post}</h6>
				<p>{logs.mistakesWereMadeToday}</p>
				<p>{`Days since last crisis: ${logs.daysSinceLastCrisis}`} </p>
				<div className='showNavigation'>
					{' '}
					<Link to={`/logs`}>
						<button>Back</button>
					</Link>{' '}
					<Link to={`/logs/${index}/edit`}>
						<button>Edit</button>
					</Link>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</h3>
		</article>
	)
}

export default withRouter(LogDetails)