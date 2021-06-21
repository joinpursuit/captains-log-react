import React from 'react'
import {Link} from 'react-router-dom'

export default function Log({log, index}) {

    return (
        <div>
            <Link to={`/logs/${index}`}>{log.title}</Link>
        </div>
    )
}
