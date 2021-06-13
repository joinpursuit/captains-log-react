import React from 'react'
import { useState ,useEffect} from "react"
import axios from "axios";
import { apiURL } from "../util/apiURL"
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
const API = apiURL();


export default function Edit() {
    const history = useHistory()
    const {index} = useParams()
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
      });
    useEffect(() => {

        getLog()

    }, [])
    const getLog = async() =>{
        let res;
        try{
            res= await axios.get(`${API}/logs/${index}`)
            setLog(res.data);
        }catch (err) {
            console.log(err);
        }
    }
    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`${API}/logs/${index}`, log);
            history.push(`/logs/${index}`);
          } catch (err) {
            console.log(err);
          }
      }
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
