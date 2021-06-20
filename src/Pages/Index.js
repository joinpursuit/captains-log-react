import React from 'react'
import Logs from '../Components/Logs'

export default function Index( { logs } ) {

    return (
        <div>
            <h1>Index</h1>
            <Logs logs={logs} />
        </div>
    )
}
