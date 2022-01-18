import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LogNewForm() {

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const navigate = useNavigate()

   const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value })
    }

    const handleCheckBoxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/logs`, log)
        .then((res)=>{
            navigate("/logs")
        }).catch((err)=>{
            console.log(err)
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input 
                id="captainName"
                value={log.captainName}
                onChange={handleTextChange}
                placeholder="Name"
                type="text" 
                />
                <label htmlFor="title">Title:</label>
                <input 
                id="title"
                value={log.title}
                onChange={handleTextChange}
                placeholder="Title"
                type="text" 
                />
                <label htmlFor="post">Post:</label>
                <textarea 
                id="post"
                value={log.post}
                onChange={handleTextChange}
                placeholder="Post"
                type="text" 
                />
                   <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input 
                id="mistakesWereMadeToday"
                type="checkbox"
                onChange={handleCheckBoxChange}
                checked={log.mistakesWereMadeToday}
                />
                   <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input 
                id="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis}
                onChange={handleTextChange}
                placeholder="daysSinceLastCrisis"
                type="number" 
                />
                <input type="submit" />
            </form>
            
        </div>
    )
}

export default LogNewForm
