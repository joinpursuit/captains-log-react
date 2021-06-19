import { useState } from 'react'
import {withRouter} from "react-router-dom"

 function BudgetNewForm(props) {
    const [book, setBook] = useState({
        date: '',
        taxes: [],
        retirement: [],
        save: [],
        creditcard: [],
        market: [],
        internet: [],
        pet: [],
        car: [],
        insurrance: [],
        additional: [],
        made: true,
    })
    const HandleInput =(e)=>{
        setBook({...book, [e.target.id]:e.target.value})
    }
    const HandleCheck =()=>{
        setBook({...setBook, made: !book.made})
    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        props.addBook(book)
        props.history.push("/logs")
    }
    return (
        <div >
            <form onSubmit={HandleSubmit} className="form">
            <label htmlFor="date">Date:</label>
            <input
            id="date"
            value={book.date}
            type="text"
            onChange={HandleInput}
            placeholder="Months-Day"
            required/>
            <label htmlFor="taxes">Taxes:</label>
            <input
             id="taxes"
             value={book.taxes}
             type="number"
             onChange={HandleInput}
             placeholder="%"
             required/>
            <label htmlFor="retirement">Retirement:</label>
            <input
            id="retirement"
            value={book.retirement}
            type="number"
            onChange={HandleInput}
            placeholder="$ Amount"
            required/>
            <label htmlFor="save">Save:</label>
            <input
            id="save"
            value={book.save}
            type="number"
            onChange={HandleInput}
            placeholder="$ Total"
            required/>
            <label htmlFor="creditcard">CreditCard:</label>
            <input
            id="creditcard"
            value={book.creditcard}
            type="number"
            onChange={HandleInput}
            placeholder="$ Income"
            required/>
            <label htmlFor="market">Market:</label>
            <input
            id="market"
            value={book.market}
            type="number"
            onChange={HandleInput}
            placeholder="$ Spent"
            required/>
            <label htmlFor="internet">Internet:</label>
            <input
            id="internet"
            value={book.internet}
            type="number"
            onChange={HandleInput}
            placeholder="$ Monthly"
            required/>
            <label htmlFor="pet">Pet:</label>
            <input
            id="pet"
            value={book.pet}
            type="number"
            onChange={HandleInput}
            placeholder="$ food"
            required/>
            <label htmlFor="car">Car:</label>
            <input
            id="car"
            value={book.car}
            type="number"
            onChange={HandleInput}
            placeholder="$ Monthly"
            required/>
            <label htmlFor="insurrance">Insurrance:</label>
            <input
             id="insurrance"
             value={book.insurrance}
             type="number"
             onChange={HandleInput}
             placeholder="$ Amount"
             required/> 
            <label htmlFor="additional">Additional:</label>
            <input
            id="additional"
            value={book.additional}
            type="number"
            onChange={HandleInput}
            placeholder="$ Amount"
            required/>
            <label htmlFor="made">Made:</label>
            <input
            id="made"
            value={book.made}
            />
            Checkbox <input
            id="made"
            type="checkbox"
            onChange={HandleCheck}
            checked={book.made}
            className ="checkbox"
            /> 
            <button type='submit' className="btnform">Submit Budget</button>
            </form>
           
        </div>
    )
}
export default withRouter(BudgetNewForm)