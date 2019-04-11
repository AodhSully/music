import React from 'react'
// import React from 'react';

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <img className="img404" src={require('../../images/piano.jpg')} alt="piano" />
      <p className="p404">Sorry that page does not exist</p>
    </div>
  )
}

export default Error;
