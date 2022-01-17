import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function LogEditForm() {
    let { index } = useParams();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value});
    }

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/${index}`)
            .then((res)=>{
                setLog(res.data);
            }).catch((err)=>{
                navigate("/not-found");
            })
    }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("log:", log);
        axios.post(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/${index}`, log)
            .then((res)=>{
                navigate(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/`);
            }).catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div className="Edit">
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
            <Link to={`/logs/${index}`}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default LogEditForm;