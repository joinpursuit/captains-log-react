import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; 

function LogEditForm() {
    let { index } = useParams();
    const navigate = useNavigate();

    const [ log, setLog ] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: null,
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value});
    }

    const handleCheckBoxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    }

    useEffect(()=> {
        axios.get(`${API_URL}/logs/${index}`)
        .then((res) => {
            setLog(res.data);
        }).catch((err) => {
            navigate("/not-found");
        });
    }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${API_URL}/logs/${index}`, log)
        .then((res)=> {
            setLog(res.data)
            navigate(`/logs/${index}`);
        }).catch((err)=> console.log(err))
    };

    return (
        <div className='Edit'>
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
            <Link to={`/logs`}>
                <button>Back</button>
            </Link>
        </div>
    );
}

export default LogEditForm;