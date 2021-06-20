import React from 'react'

export default function Log( { log, index } ) {

    return (
        <div>
            <a href={`/logs/${index}`}>{log.title}</a>
        </div>
    )
}
