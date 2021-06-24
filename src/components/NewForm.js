import { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

function NewForm({ addLog }) {
    const history = useHistory();

    const [ check, setCheck ] = useState({
        mistakesWereMadeToday: false
    });

    const [ log, setLog ] = useState({
        captainName: '',
        title: '',
        post: '',
        daysSinceLastCrisis: '',
    });

    const handleInputChange = (e) => {
        setLog({
            ...log,
            [e.target.id]: e.target.value
        });
    };

    const handleCheckbox = (e) => {
        if ( check.mistakesWereMadeToday === false ) {
            setCheck({ mistakesWereMadeToday: true })
        } else {
            setCheck({ mistakesWereMadeToday: false })
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addLog(log);
        history.push('/logs');
    };

    return (
        <>
        <h1>Captain's Log</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name</label>
            <input 
                type="text"
                id="captainName"
                name="captainName"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="title">Title</label>
            <input 
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="post">Post</label>
            <textarea 
                type="text"
                id="post"
                name="post"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="mistakesWereMadeToday">Mistakes were made today </label>
            <input 
                type="checkbox"
                id="mistakesWereMadeToday"
                name="mistakesWereMadeToday"
                onChange={handleCheckbox}
            />

            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
            <input 
                type="number"
                id="daysSinceLastCrisis"
                name="daysSinceLastCrisis"
                onChange={handleInputChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default withRouter(NewForm);
