import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LogDetails from '../Components/LogDetails'

export default function Show( {logs} ) {

    let { index } = useParams()
    console.log(index)

    return (
        <div>
            <h1>Show</h1>
            <LogDetails />
        </div>
    )
}
