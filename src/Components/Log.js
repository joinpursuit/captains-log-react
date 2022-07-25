/** @format */

import { Link } from 'react-router-dom';

function Log({ log, index }) {
	return (
		<tr>
			<td>
				{log.mistakesWereMadeToday ? (
					<span>🖖</span>
				) : (
					<span>&nbsp; &nbsp; &nbsp;</span>
				)}
			</td>
			<td className='non-animated-cell'>{log.captainName}</td>
			<td className='animated-cell'>
				<Link to={`/logs/${index}`}>{log.title}</Link>
			</td>
		</tr>
	);
}

export default Log;
