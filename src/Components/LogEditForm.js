import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function LogEditForm() {
    const URL = process.env.REACT_APP_API_URL;
    let { index } = useParams();
    const navigate = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    //call setLog with the log we are currently at
    // and then we are going to call setLog with the log the call returns
    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

        //make an api call to the back end, using the index from router

    useEffect(() => {
        axios
            .get(`${URL}/logs/${index}`)
            .then((response)=> {
        setLog({
            captainName: response.data.captainName,
            title: response.data.title,
            post: response.data.post,
            mistakesWereMadeToday:response.data.mistakesWereMadeToday,
            daysSinceLastCrisis: response.data.daysSinceLastCrisis,
        })
    })
    }, [URL]);

    const handleSubmit = (event) => {
        event.preventDefault();
        //make a put request
        //we will update one resources,we should go to the resource's detail page
        //if we see the updated information, that would the element in that index is rendered
        axios
        .put(`${URL}/logs/${index}`,log)
        .then(()=> navigate (`${URL}/logs/${index}`)
        // .then(()=> navigate(`/logs/${index}`)
    )
    };

return (
    <div className="Edit">
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

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
            id="daysSinceLastCrisis"
            type="number"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            placeholder="Please enter days since last"
            onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
        </form>

        <a href= {`/logs/${index}`}>
        <button>Back</button>
        </a>

    </div>
);
};

export default LogEditForm;