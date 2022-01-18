import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function LogEditForm() {
    let { index } = useParams();
    let navigate = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value })
    };

    const handleCheckBoxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res)=>{
            setLog(res.data)
        }).catch((err)=>{
           navigate("/not-found")
        })
    }, [index, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
        .then(()=>{
            navigate(`/logs/${index}`)
        })
    };



    return (
        <div>
          <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input 
                id="captainName"
                value={log.captainName}
                onChange={handleTextChange}
                placeholder="Captain Name"
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
                   <label htmlFor="Mistakes were made today">Mistakes were made today:</label>
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
                <br />
                <input type="submit" />
            </form>

            <Link to={`/logs/${index}`}>
            <button>Go Back</button>
            </Link>
        </div>
    )
}

export default LogEditForm
