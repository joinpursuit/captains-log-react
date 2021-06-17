import { useState } from "react";
import { withRouter } from "react-router-dom";


function LogNewForm(props) {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    });

    const handleTextChange = (e) => {
        setLog({...log, [e.target.id] : e.target.value})
    }
    

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday : log.mistakesWereMadeToday})
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLog(log);
        props.history.push("/logs");
    }

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input 
                    id="captainName"
                    type="text"
                    value={log.captainName}
                    onChange={handleTextChange}
                    placeholder="Name of Captain"
                    required
                />
                <label htmlFor="title">Title:</label>
                <input 
                    id="title"
                    type="text"
                    value={log.title}
                    onChange={handleTextChange}
                    placeholder="Title of Captain"
                    required
                />
                <label htmlFor="daysSinceLastCrisis">How many days has it been since last crisis?</label>
                <input 
                    id="daysSinceLastCrisis"
                    type="number"
                    value={log.daysSinceLastCrisis}
                    onChange={handleTextChange}
                    placeholder="Days Since last crisis"
                    required
                />
                <label htmlFor="mistakesWereMadeToday">Made any mistake today:</label>
                <input 
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <br />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={log.post}
                    onChange={handleTextChange}
                    placeholder="Post your log here!"
                />

                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default withRouter(LogNewForm)
