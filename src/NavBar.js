import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div class='NavBar'>
            <Link to='/'>Home</Link>
            <Link to='/logs'>Logs</Link>
            <Link to='/logs/new'>New Logs</Link>
        </div>
    )
}
