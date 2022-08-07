import React from 'react'
import { Link } from "react-router-dom"

function Log({ log, index }) {
  console.log(log)
  console.log(index)
  return (
      <tr className='log-entry'>
        <td>Captain Name: {log.captainName}</td>
        <td>Title: {log.title}</td>
        <td>Post: {log.post}</td>
        <td>Mistakes Made Today: {log.mistakesWereMadeToday ? <span>Yes</span> : <span>No</span>}</td>
        <td>Days Since Last Crisis: {log.daysSinceLastCrisis}</td>
        <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
      </tr>
  )
}

export default Log