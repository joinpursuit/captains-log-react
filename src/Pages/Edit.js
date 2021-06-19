import React from 'react'
import EditForm from "../Components/EditForm"

export default function Edit({logs, updatelogs}) {
    return (
        <div>
            <h1 className="newtrans">Edit</h1> 
            <EditForm logs={logs} updatelogs={updatelogs}/>
        </div>
    )
}
