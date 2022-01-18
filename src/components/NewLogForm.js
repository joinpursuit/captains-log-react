import {useState} from "react";
import{useNavigate} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL


 function NewLogForm(){
    let navigate = useNavigate();

    const[log, setlog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: ""
    });

    const handleInputChange = (e)=>{
        setlog({...log, [e.target.id]: e.target.value})
    };

    const handleCheckboxChange = () =>{
        setlog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API}/logs/`,log)
        .then((res)=>{
            navigate(`/logs`)
        }).catch((err)=>{
            navigate("*")
        })
        console.log(log)
    };


    return(
        <div className="New">
            <h2>New Log Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name: </label>
                <input
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleInputChange}
                placeholder="Captain Name"
                required
                />
                <label htmlFor="title">Title: </label>
                <input
                id="title"
                type="text"
                name="title"
                value={log.title}
                placeholder="Episode title"
                onChange={handleInputChange}
                required
                />
                <label htmlFor="post">Post:</label>
                <textarea
                id="post"
                type="text"
                name="post"
                value={log.post}
                placeholder="Notable quote"
                onChange={handleInputChange}
                />
                <label htmlFor="daysSinceLastCrisis">Enter Number of Days Since Last Crisis: </label>
                <input
                id="daysSinceLastCrisis"
                name="daysSinceLastCrisis"
                type="number"
                value={log.daysSinceLastCrisis}
                onChange={handleInputChange}
                placeholder="Enter days since last crisis"
                />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
                <input
                id="mistakesWereMadeToday"
                type="checkbox"
                checked={log.mistakesWereMadeToday}
                onChange={handleCheckboxChange}
                />
                <input type = "submit" />
            </form>
        </div>
    )
};
export default NewLogForm