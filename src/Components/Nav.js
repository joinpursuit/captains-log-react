import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/logs">Logs</Link>
        <Link to="/logs/new">New Log</Link>
    </div>
  )
}

export default Nav