import React from 'react'
import NewForm from '../Components/NewForm'

export default function New({addBook}) {
    return (
        <div>
           <h1>Transactions</h1> 
           <NewForm  addBook={addBook}/>
        </div>
    )
}
