import React from 'react'
import LogNew from '../Components/LogNew'

export default function New({logs}) {
    return (
        <div>
            <h1>New Log</h1>
            <LogNew logs={logs}/>
        </div>
    )
}
