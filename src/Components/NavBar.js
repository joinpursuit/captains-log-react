import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>

      <button>
        <NavLink to="/">Home</NavLink>
      </button>

      <button>
        <NavLink to="/logs">Logs</NavLink>
      </button>

      <button>
        <NavLink to="/logs/new">New Log</NavLink>
      </button>

      <h1>Captain's Log</h1>

    </nav>
  )
}
