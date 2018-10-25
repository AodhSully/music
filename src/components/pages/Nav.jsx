import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navigationTab">
      <NavLink to="/">Home</NavLink><br/>
      <NavLink to="/Introduction">Introduction</NavLink><br/>
      <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>
      <NavLink to="/PitchNames">Pitch Names</NavLink><br/>
      <NavLink to="/LettersGame">Letters Game</NavLink><br/>
      <NavLink to="/SharpsFlats">Sharps Flats</NavLink><br/>
      <NavLink to="/HalfWholeSteps">Half Steps & Whole Steps</NavLink><br/>
      <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>
      <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>
      <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>

    </div>
  )
}

export default Nav;
