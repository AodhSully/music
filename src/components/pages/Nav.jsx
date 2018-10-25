import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <NavLink to="/Introduction">Introduction</NavLink>
      <NavLink to="/Error">404</NavLink>


    </div>
  )
}

export default Nav;

// <NavLink to="/">Introduction</NavLink>
