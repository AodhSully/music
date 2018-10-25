import React from 'react'
// import React from 'react';

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <img src={require('../../images/piano.jpg')} alt="piano" />
      <p>Sorry that page does not exist</p>
    </div>
  )
}

export default Error;
