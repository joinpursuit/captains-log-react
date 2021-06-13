import { useState } from "react"
import axios from "axios";
import { apiURL } from "../util/apiURL"
import { useHistory } from "react-router-dom"
const API = apiURL();

function NewLogs() {
  const history = useHistory()
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0
  });

  // const [capNameInput, setCapNameInput] = useState("")
  // const [titleInput, setTitleInput] = useState("")
  // const [postInput, setPostInput] = useState("")
  // // const [,] = useState(false)
  // const [numberInput, setNumberInput] = useState(0)

  // const handleSubmit = (e) => {
  //   e.preventDefault()


  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addLog(log)
    history.push("/logs");
  }
  const addLog = async (newLog) => {
    try {
      await axios.post(`${API}/logs`, newLog);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Home">
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="title"
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          type="text"
          onChange={handleTextChange}
          placeholder="post"
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today?</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="daysSinceLastCrisis"
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default NewLogs;