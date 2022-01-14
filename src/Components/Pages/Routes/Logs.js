import axios from "axios"
import {useState, useEffect} from "react"

const URL = process.env.REACT_APP_URL
console.log(URL)

const Logs = () => {
    const [logs, useLogs] = useState([])
    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs`)
            console.log(data)
            useLogs(data)
        }
        FetchData()
    }, [])
    return (
        <div>
            {logs.map(el=> el.captainName)}
        </div>
    )
}

export default Logs