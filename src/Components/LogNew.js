import React,{ useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//   - captainName
//   - title
//   - post
//   - mistakesWereMadeToday
//   - daysSinceLastCrisis
const API = process.env.REACT_APP_API_URL;

const LogNew = () => {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const addLog = () =>{
    axios.post(`${API}/logs`, newLog)
    .then(response => navigate('/logs'))
    .catch(error => console.error(error))
  }
  const handleTextChange = (event)=>{
    setNewLog({...newLog, [event.target.id]: event.target.value})
  
  }
  
  const handleMistakes = (event) =>{
    console.log(event.target.value)
    setNewLog({...newLog, mistakesWereMadeToday: event.target.value})
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    addLog()
  };
  return (
    <div>
      <h2>NEW LOG</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:
        <input
          id="captainName"
          value={newLog.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Who's your Captain?"
          required
          />
          </label>
        <br/>
        <label htmlFor='title'>Title:
        <textarea
          id="title"
          type="text"
          required
          value={newLog.title}
          placeholder="say my title"
          onChange={handleTextChange}
          />
          </label>
        <br/>
        <label htmlFor='post'>Post:
        <textarea
          id="post"
          type="text"
          value={newLog.post}
          placeholder="Post about your Captain"
          onChange={handleTextChange}
          />
          </label>
        <br/>
        <br/>

        <label>Mistakes Made:          
        <p> True
        <input
          id="mistakesWereMadeToday"
          type = 'radio'
          name="mistakes"
          value={true}
          onChange={handleMistakes}
          placeholder="Describe why you bookmarked this site"
        />
        </p>

        <p> False
        <input
         id="mistakesWereMadeToday"
         type ='radio'
         name="mistakes"
         value={false}
         onChange={handleMistakes}
         />
        </p>
         </label>
        <br />

        <input type="submit" />
      </form>
      {/* <Link to={`/bookmarks/${index}`}>
        <button>Nevermind!</button>
      </Link> */}
    </div>
  );
};

export default LogNew;
