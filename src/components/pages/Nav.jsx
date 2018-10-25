import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navigationTab">
      <NavLink to="/">Home</NavLink><br/>
      <NavLink to="/Introduction">Introduction</NavLink><br/>
      <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>

    </div>
  )
}

export default Nav;
