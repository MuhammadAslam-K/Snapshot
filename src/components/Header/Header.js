import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {

  return (
    <div className='header'>
      <ul>
        <Link to="/"><li>Aarzoo Khurana</li></Link>
        <Link to="/Images" ><li>Images</li></Link>
        <Link to="/Videos" ><li>Videos</li></Link>
      </ul>
    </div>
  )
}

export default Header
