import React from 'react'
import LogEditForm from '../components/LogEditForm';

const Edit = ({ logs, updateLog }) => {
    return (
        <div>
            <h2>Edit</h2>
            <LogEditForm updateLog={updateLog} logs={logs} />
        </div>
    )
}

export default Edit
