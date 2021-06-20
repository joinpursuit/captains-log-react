import React from 'react'
import Log from './Log'

export default function Logs(props) {

    const logMap = props.logs.map((log, index) => {
        return <Log key={index} log={log} index={index} />
    })
    

    return (
        <div>
            <ul>
                {logMap}
            </ul>
        </div>
    )
}
