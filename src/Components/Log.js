import { Link } from 'react-router-dom'

export default function Log({ log, index }) {
    return (
        <div className='Log'>
            {/* {log.mistakesWereMadeToday ? (<span>😬</span>) : (<span>&nbsp; &nbsp; &nbsp;</span>)} */}
            {/* <Link to={`/logs/${index}`}><h1>{log.title}</h1></Link> */}
            <a href={`/logs/${index}`}><h1>{log.title}</h1></a>
        </div>
    )
}
