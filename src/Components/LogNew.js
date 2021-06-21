import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'


const NewLog = (props) => {
    const [logs, setLog] = useState ({
        captainName: '',
        title: '',
        post: '',
        mistakesWereMadeToday: '',
        daysSinceLastCrisis: '',
    })

    

    const handleText = (e) => {
        setLog ({
            ...logs, [e.target.id] : [e.target.value]
        })
    }

    const handleCheck = (e) => {
        setLog ({
            ...logs, mistakesWereMadeToday : !logs.mistakesWereMadeToday
        })
    }


    const handleSubmit = (e) => {
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
                    value={logs.name}
                    type='text'
                    onChange={handleText}
                    placeholder="Captain's Name"
                    required
                />
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    value={logs.title}
                    type='text'
                    onChange={handleText}
                    placeholder='Title'
                />
                <label htmlFor='post'>Post</label>
                <textarea
                    id='post'
                    value={logs.post}
                    type='text'
                    onChange={handleText}
                />
                <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
                <input
                    id='mistakesWereMadeToday'
                    type='checkbox'
                    onChange={handleCheck}
                    checked={logs.mistakesWereMadeToday}
                />
                <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
                <input
                    id='daysSinceLastCrisis'
                    value={logs.daysSinceLastCrisis}
                    type='number'
                    onChange={handleText}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default withRouter(NewLog);