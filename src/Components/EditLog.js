import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const URL = process.env.REACT_APP_URL

const EditLog = () => {
    const {index} = useParams()

    const nav = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    })

    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs/${index}`)
            setLog(data)
        }
        FetchData()
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === "mistakesWereMadeToday"){
            setLog({...log, [name]: !log.mistakesWereMadeToday})
        } else {
            setLog({...log, [name]: value})
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(log)    
        axios
        .put(`${URL}/logs/${index}`, log)
        .then(() => nav(`/logs/${index}`))
    }

    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit} onChange={handleChange} action="">
                <label htmlFor="name">Captain's Name:</label>
                <input name="captainName" id="captainName" type="text" />
                <label htmlFor="title">Title:</label>
                <input name="title" id="title" type="text" />
                <label htmlFor="post">Post:</label>
                <textarea name="post" type="text" id="post" />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input name="daysSinceLastCrisis" type="number" id="daysSinceLastCrisis"/>
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input name="mistakesWereMadeToday" id="mistakesWereMadeToday" type="checkbox" />
                <input type="submit" />
            </form>
            <Link to={`/logs`}>Back</Link>
        </div>
       
    )
}

export default EditLog