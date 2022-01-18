import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const URL = process.env.REACT_APP_URL

const NewLog = () => {
    const nav = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(log)
        if(name === "mistakesWereMadeToday"){
            setLog({...log, [name]: !log.mistakesWereMadeToday})
        } else {
            setLog({...log, [name]: value})
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(log)    
        axios
        .post(`${URL}/logs`, log)
        .then(() => nav("/logs"))
    }

    return (
        <div>
            <h1>New</h1>
            <form onSubmit={handleSubmit} onChange={handleChange} action="">
            <label htmlFor="name">Captain's Name:</label>
            <input name="captainName" id="captainName" type="text" />
            <label htmlFor="title">Title:</label>
            <input name="title" id="title" type="text" />
            <label htmlFor="post">Post:</label>
            <textarea name="post" type="text" id="post" />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input name="daysSinceLastCrisis" type="number" id="daysSinceLastCrisis"/>
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input name="mistakesWereMadeToday" id="mistakesWereMadeToday" type="checkbox" />
            <input type="submit" />
        </form>
        </div>
        
    )
}

export default NewLog