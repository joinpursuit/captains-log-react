import React from 'react'
import EditForm from "../Components/EditForm"

export default function Edit({logs, updatebook}) {
    return (
        <div>
            <h1 className="newtrans">Edit</h1> 
            <EditForm logs={logs} updatebook={updatebook}/>
        </div>
    )
}
