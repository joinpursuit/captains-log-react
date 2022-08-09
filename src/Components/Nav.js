
import React from 'react'
import {useNavigate} from "react-router-dom"

import "./Nav.css"

const Nav = () =>{

const navigate = useNavigate();
 
return(
  <div className='header'> 
    <h1>Captain's Log</h1>
    <button onClick={()=>navigate('/logs/new')}>New Log</button>
  </div>
)
}
export default Nav