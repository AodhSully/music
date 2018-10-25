import React from 'react';
// import img from '../images/DrawMusicLogo.png'

export default class Head extends React.Component {
  render () {
    return (
      <div className="headder">

        <img src={require('../images/DrawMusicLogo.png')} alt="Draw Music Logo" />
        <span className="pop">Pop Music Theory</span>
      </div>

    );
  }
}
// "img"
