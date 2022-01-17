import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function LogNewForm() {
    const { index } = useParams;
    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/${index}`)
          .then((response) => {
            setLog(response.data)
        })
        .catch((e) => console.log('catch', e))
      }, []);

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value});
    }

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("log:", log);
        axios.post(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs`, log)
            .then((res)=>{
                navigate(`/logs`);
            }).catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Captain"
                    required              
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Title"               
                />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    value={log.post}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Post"           
                />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
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
                    placeholder="Days Since Last Crisis"           
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LogNewForm;