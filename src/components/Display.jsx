import React from 'react';

function Display({item}) {
  return (
      <div className='box'>
          <h1>{item.név}</h1>
          <p>{item.leírás}</p>
      </div>
  )
}

export default Display;