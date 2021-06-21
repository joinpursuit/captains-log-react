import React from 'react'
import { useState } from 'react'
import {withRouter} from "react-router-dom"

 function EditForm(props) {
    const [book, setBook] = useState({
        captainName: "",
        title: "",
        post: '',
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: [],
    })
   

    const HandleInput =(e)=>{
        setBook({...book, [e.target.id]: e.target.value})
    }
    const HandleCheck =()=>{
        setBook({...book, made: !book.made})
    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        props.updatebook(book)
        props.history.push("/logs")
    }

    return (
        <div>
              <form onSubmit={HandleSubmit} className="form">
            <label htmlFor="captainName">captainName:</label>
            <input
            id="captainName"
            value={book.captainName}
            type="text"
            onChange={HandleInput}
            placeholder=""
            required/>
            <label htmlFor="title">Title:</label>
            <input
             id="title"
             value={book.title}
             type="text"
             onChange={HandleInput}
             placeholder="%"
             required/>
            <label htmlFor="post">Post:</label>
            <input
            id="post"
            value={book.post}
            type="text"
            onChange={HandleInput}
            placeholder="$ Amount"
            required/>
            <label htmlFor="daysSinceLastCrisis">DaysSinceLastCrisis:</label>
            <input
            id="daysSinceLastCrisis"
            value={book.daysSinceLastCrisis}
            type="number"
            onChange={HandleInput}
            placeholder="$ Total"
            required/>
           
            <label htmlFor="mistakesWereMadeToday">Made:</label>
            <input
            id="mistakesWereMadeToday"
            value={book.mistakesWereMadeToday}
            />
            Checkbox <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={HandleCheck}
            checked={book.mistakesWereMadeToday}
            className ="checkbox"
            /> 
            <button type='submit' className="btnform">Submit Budget</button>
            </form>
        </div>
    )
}
export default withRouter(EditForm)