import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function EditLog(){
    let {index} = useParams();
    let navigate = useNavigate();

    const[log, setlog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 0
    });

    const handleInputChange = (e)=>{
        setlog({...log, [e.target.id]: e.target.value})
    };
    const handleCheckboxChange = () =>{
        setlog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
    }
    useEffect(()=>{
        axios.get(`${API}/logs/${index}`)
        .then((res)=>{
            setlog(res.data)
        }).catch((err)=>{
            navigate("*")
        })
    }, [index,navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`${API}/logs/${index}`,log)
        .then((res)=>{
            navigate(`/logs/${index}`)
        }).catch((err)=>{
            navigate("*")
        })
    };
    return(
        <div className="New">
            <h2>Edit</h2>
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
            <div id="button">
                <Link to={`/logs/${index}`}><button>Back</button></Link>
            </div>
        </div>
    )
}

export default EditLog