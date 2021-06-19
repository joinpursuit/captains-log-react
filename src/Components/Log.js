import React from 'react'
import { Link } from 'react-router-dom'

function Log({log, i}) {
    return (
        <div>
            <h2>{log.title}</h2>
            <Link to={`/logs/${i}`}>{log.title}</Link>
        </div>
    )
}

export default Log
