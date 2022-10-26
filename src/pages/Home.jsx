import React, {useState} from 'react';

import project from '../data/project'
import Display from '../components/Display';

function Home() {
  return (
    <div>
        {project.projektek.map((item, i) => (
              <Display item={item} key={i}/>
            ))}
    </div>
  )
}

export default Home;