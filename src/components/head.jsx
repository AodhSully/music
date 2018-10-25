import React from 'react';

export default class Head extends React.Component {
  render () {
    return (
      <div className="headder">

        <img className="logoImg" src={require('../images/DrawMusicLogo.png')} alt="Draw Music Logo" />
        <span className="pop">Pop Music Theory</span>
      </div>

    );
  }
}
