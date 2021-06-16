import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary logs'>
        <a className='navbar-brand' href='/'>
          <h1 style={{paddingLeft: "40px"}}>Captain's Log</h1>
        </a>
        <Link to='/logs' key={uuid()}>
          <button type='button' className='btn btn-primary btn-lg'>
            <h3 className='text-secondary'>Logs</h3>
          </button>
        </Link>
        <Link to='/logs/new' key={uuid()}>
          <button type='button' className='btn btn-primary btn-lg'>
            <h3 className='text-secondary'>New Log</h3>
          </button>
        </Link>
    </nav>
  )
}

export default NavBar
