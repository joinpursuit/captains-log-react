import React from 'react'
import LogNewForm from '../components/LogNewForm';

const New = ({ addLog }) => {
    return (
        <div>
          <h1>Captain's Log</h1>
          <LogNewForm addLog={addLog}/>
        </div>
    )
}

export default New;