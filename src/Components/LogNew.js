import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'


const LogEntry = (props) => {
    const [newLog, setLog] = useState ({
        captainName: '',
        title: '',
        post: '',
        mistakesWereMadeToday: '',
        daysSinceLastCrisis: '',
    })


    const handleText = (e) => {
        setLog ({
            ...newLog, [e.target.id] : [e.target.value]
        })
    }

    const handleCheck = (e) => {
        setLog ({
            ...newLog, mistakesWereMadeToday : !newLog.mistakesWereMadeToday
        })
    }


    const handleSubmit = (e) => {
        props.addLog(newLog)
        e.preventDefault()
        props.history.push('/logs')
    }

    return(
        <div>
            <h1>Add a New Log</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='captainName'>Captain's Name</label>
                <input
                    id='captainName'
                    value={newLog.name}
                    type='text'
                    onChange={handleText}
                    placeholder="Captain's Name"
                    required
                />
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    value={newLog.title}
                    type='text'
                    onChange={handleText}
                    placeholder='Title'
                />
                <label htmlFor='post'>Post</label>
                <textarea
                    id='post'
                    value={newLog.post}
                    type='text'
                    onChange={handleText}
                />
                <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
                <input
                    id='mistakesWereMadeToday'
                    type='checkbox'
                    onChange={handleCheck}
                    checked={newLog.mistakesWereMadeToday}
                />
                <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
                <input
                    id='daysSinceLastCrisis'
                    value={newLog.daysSinceLastCrisis}
                    type='number'
                    onChange={handleText}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default withRouter(LogEntry);