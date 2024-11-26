import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar">
        <div className="logo">
        <NavLink to={"/"}>Bekzod</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/students"}>Students</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
        <div className="nav-cta">
          <a href="/signup" className="cta-button">Sign Up</a>
        </div>
      </nav>
    </div>
  )
}

export default Header
