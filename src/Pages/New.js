import React from 'react'
import NewLog from '../Components/NewLog'

export default function New({ addLog }) {
    
    return (
        <div>
            New Page
            <NewLog addLog={addLog} />
        </div>
    )
}
