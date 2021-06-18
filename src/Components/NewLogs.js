import React from 'react';
import { useState } from 'react';
import { withRouter } from "react-router-dom"



const NewLogs = (props) => {
    const [logs, setLogs] = useState({
        captainName: '',
        title: '',
        post: '',
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    const handleTextChange = (e) => {
        setLogs({
            ...logs, [e.target.id]: [e.target.value]
        })
    }

    const handleCheckBoxChange = () => {
        setLogs({
            ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/logs')
    }

    return (
        <div>
            <h1>Add a New Log</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='captainName'>Captain's Name</label>
                <input
                    id='captainName'
                    value={logs.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder="Captain's Name"
                    required
                />
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    value={logs.title}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Title'
                />
                <label htmlFor='post'>Post</label>
                <textarea
                    id='post'
                    value={logs.post}
                    type='text'
                    onChange={handleTextChange}
                />
                <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
                <input
                    id='mistakesWereMadeToday'
                    type='checkbox'
                    onChange={handleCheckBoxChange}
                    checked={logs.mistakesWereMadeToday}
                />
                <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
                <input
                    id='daysSinceLastCrisis'
                    value={logs.daysSinceLastCrisis}
                    type='number'
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default withRouter(NewLogs);