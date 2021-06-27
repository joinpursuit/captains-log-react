import React, { useState } from 'react';
import axios from "axios";
import  { apiURL } from "../util/apiURL";
import { useHistory } from 'react-router-dom';

const API_BASE = apiURL();

export default function New() {
    const history = useHistory();
    const [ input, setInput ] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    const handleInput = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    const handleInputBool = (e) => {
        setInput({ ...input, [e.target.id]: !e.target.value });
    }

    const handleInputNum = (e) => {
        setInput({ ...input, [e.target.id]: Number(e.target.value) });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE}/logs`, input)
        .then(() => history.push("/logs"), err => console.log(err));
    }

    return (
        <div>
            <h2>New Captain's Log</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                    type="text"
                    value={input.captainName}
                    id="captainName"
                    onChange={handleInput} />
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    value={input.title}
                    id="title"
                    onChange={handleInput} />
                <label htmlFor="post">Post:</label>
                <textarea
                    type="text"
                    value={input.post}
                    id="post"
                    onChange={handleInput} />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input
                    type="checkbox"
                    value={input.mistakesWereMadeToday}
                    id="mistakesWereMadeToday"
                    onChange={handleInputBool} />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input
                    type="number"
                    value={input.daysSinceLastCrisis}
                    id="daysSinceLastCrisis"
                    onChange={handleInputNum} />
                <input type="submit" />
            </form>
        </div>
    )
}
