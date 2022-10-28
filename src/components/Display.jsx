import React from 'react';

function Display({item}) {
  return (
      <div className='box'>
          <h1>{item.név}</h1>
          <p>{item.leírás}</p>
          <img src={`https://api.lorem.space/image?w=150&h=180&hash=${item.kezdőbetűk}`} alt="" />
      </div>
  )
}

export default Display;