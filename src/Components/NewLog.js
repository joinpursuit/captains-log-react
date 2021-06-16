import { useState} from "react";
import { useHistory } from "react-router-dom"


const NewLog = ({addLog}) => {
    const [log,setLog] =  useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })
const history = useHistory()

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id]: event.target.value})
    }

    const handleCheckbox = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addLog(log)
        history.push("/logs")



    }
    const { captainName, title,post,mistakesWereMadeToday,daysSinceLastCrisis} = log
  return (

    <div>
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input type="text" id="captainName" onChange={handleTextChange} value={captainName}/>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" onChange={handleTextChange} value={title}/>
        <label htmlFor="post">Post:</label>
        <textarea type="text" id="post" onChange={handleTextChange} value={post}/>
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input type="checkbox" id="mistakesWereMadeToday" onChange={handleCheckbox} value={mistakesWereMadeToday}/>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input type="number" id="daysSinceLastCrisis" onChange={handleTextChange} value={daysSinceLastCrisis}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewLog;
