import React, {useState, useContext} from 'react';

import { WizardContext } from '../components/WizardContext';

function Display({item}) {
  const pNames  = useContext(WizardContext);

    
    // const [description, setDescription] = useState([]);
    // let pNames = [];
    // let pDesc = [];

  // console.log(name);
  // console.log(description);
  console.log(pNames[0]);
  
  return (
    // <WizardContext.Provider value={{name, setName}}>
    <>
      <div className='box'>
          <h1>{item.név ? item.név : pNames[0]}</h1>
          <p>{item.leírás}</p>
          <img src={`https://api.lorem.space/image?w=150&h=180&hash=${item.kezdőbetűk}`} alt="" />
      </div>
      <div className='hol vagy'>
        {pNames ? (
            <div className='box'>
              <h1>{pNames[0]}</h1>
 
            </div>

        ) : null}
      </div> 
    </>
  // </WizardContext.Provider>
  )
}

export default Display;