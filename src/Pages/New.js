import React from 'react'
import LogNew from '../Components/LogNew'

export default function New({addLog}) {
    return (
        <div>
            <h1>New Log</h1>
            <LogNew addLog={addLog}/>
        </div>
    )
}
