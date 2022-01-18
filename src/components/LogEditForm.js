import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function LogEditForm() {
    let { index } = useParams();
    const navigate = useNavigate();
    const [ log, setLog ] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: null,
        daysSinceLastCrisis: null,
    });

    const handleSubmit = (event) => {
        
    }

    return (
        <div className='Edit'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain Name:</label>

            </form>
        </div>
    );
}

export default LogEditForm;