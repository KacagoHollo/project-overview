import React from 'react';

function Display({item}) {
  return (
    <div className='dp'>
        <p>{item.név}</p>
    </div>
  )
}

export default Display;