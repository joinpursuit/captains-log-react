
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogNewForm() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
    })

    const navigate = useNavigate();


    return (
        <div className="New">
            <form>
            {/* <form onSubmit={handleSubmit}> */}
                <label htmlFor="captainName">Captain Name</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    // onChange={handleTextChange}
                    placeholder="Name of Captain"
                    required              
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    // onChange={handleTextChange}
                    placeholder="Name of Title"               
                />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    value={log.post}
                    type="text"
                    // onChange={handleTextChange}
                    placeholder="Name of Post"           
                />
                <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today?</label>
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    // onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input
                    id="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    type="text"
                    // onChange={handleTextChange}
                    placeholder="Days Since Last Crisis"           
                />
                <input type="submit" />
            </form>

            Hello Log New Form
        </div>


    )
}

export default LogNewForm;