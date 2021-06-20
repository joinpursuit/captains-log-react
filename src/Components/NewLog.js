import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'



export default function NewLog({ addLog }) {

    const [log, setLog] = useState({
        captainName: '',
        title: '',
        post: '',
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ''
    })
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addLog(log)
        history.push(`/logs`)
    }
    const handleChange = (e) => {
        setLog({...log, [e.target.id]: e.target.value})
    }
    const handleCheckbox = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }
    
    
    return (
        <div>
            New Log Component
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="name" id="name">Captain's Name:</label>
                <input onChange={handleChange} type="text" name="" id="captainName" />
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} type="text" name="" id="title" />
                <label htmlFor="post">Post:</label>
                <textarea onChange={handleChange} name="" id="post" />
                <label htmlFor="mistakes">Mistakes were made today</label>
                <input onChange={handleCheckbox} type="checkbox" name="" id="mistakesWereMadeToday" />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                <input onChange={handleChange} type="number" name="" id="daysSinceLastCrisis" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
