import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; 

function LogNewForm() {
    let navigate = useNavigate();
    const { index } = useParams;

    const [ log, setLog ] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    });

    useEffect(() => {
        axios.get(`${API_URL}/logs/${index}`)
          .then((res) => {
            setLog(res.data)
        })
        .catch((e) => console.log('catch', e))
      }, []);

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value});
    };

    const handleCheckBoxChange = (event) => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/logs`, log)
        .then(()=> {
            navigate("/logs");
        }).catch((err)=> console.log(err));
    };

    return (
        <div className='New'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                />
                <label htmlFor='title'>Title</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                />
                <label htmlFor='post'>Post</label>
                <textarea 
                    id="post"
                    value={log.post}
                    onChange={handleTextChange}
                />
                <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
                <input
                    id="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    type="number"
                    onChange={handleTextChange}
                />
                <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
                <input 
                    id="mistakesWereMadeToday"
                    value={log.mistakesWereMadeToday}
                    onChange={handleCheckBoxChange}
                    type="checkbox"
                />
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default LogNewForm
