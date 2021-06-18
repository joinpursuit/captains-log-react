import { Link } from 'react-router-dom'

const Log = ({ logs, index }) => {
  return (
		<tr>
			{/* <td>{log.isFavorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}</td> */}
			<td>
				<a href={`/logs/${index}`} >
					{logs.title}
				</a>
			</td>
			<td>
			</td>
		</tr>
  )
};

export default Log;