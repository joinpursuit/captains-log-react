import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import axios from "axios";


function CaptainsLogNewForm() {
const navigate = useNavigate();
const URL = process.env.REACT_APP_API_URL;;

const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis:0,
});

const handleTextChange = (event) => {
setLog({ ...log, [event.target.id]: event.target.value});
};

const handleCheckboxChange = () => {
setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
};

const handleSubmit = (event) => {
event.preventDefault();
// console.log(bookmark)
// axios.post(`${URL}/bookmarks`,bookmark)
// .then(()=> navigate (`/bookmarks`))
};
return (
<div className="New">
    <form onSubmit={handleSubmit}>

    <label htmlFor="name">Captain's Name:</label>
    <input
        id="captainName"
        name="captainName"
        value={log.captainName}
        type="text"
        onChange={handleTextChange}
        placeholder="Captain's Name"
        required
    />

    <label htmlFor="title">Title:</label>
    <input
        id="title"
        value={log.title}
        type="text"
        onChange={handleTextChange}
        placeholder="Title"
        required
    />

    <label htmlFor="post">Post:</label>
    <textarea
        id="post"
        name="post"
        value={log.post}
        onChange={handleTextChange}
        placeholder="Describe your day today"
    />

    <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
    <input
        id="mistakesWereMadeToday"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={log.mistakesWereMadeToday}
    />
    <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
    <input
        id="daysSinceLastCrisis"
        type="text"
        name="daysSinceLastCrisis"
        value={log.daysSinceLastCrisis}
        placeholder="Please enter days since last"
        onChange={handleTextChange}
    />
    
    <br />
    <input type="submit" />
    </form>
</div>
);
}

export default CaptainsLogNewForm;
