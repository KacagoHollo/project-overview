import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField";

import ProgressBar from "@ramonak/react-progress-bar";

import { WizardContext } from '../components/WizardContext';

const Page1 = () => {
    const { previous, next} = useContext(WizardContext)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

  return (
    <WizardContext.Provider value={{name, setName}}>
    <div>
        <h1>Első oldal</h1>
        <ProgressBar completed={0} />
        {/* <form onSubmit={next}> */}
            <div className='name'>
                <TextField 
                    variant="filled"
                    required
                    size="small"
                    autoFocus
                    label="Projekt neve"
                    color="success"
                    type="text" 
                    placeholder="Projekt neve" 
                    value={name} 
                    inputProps={{ maxLength: 255 }}
                    onChange={(event) => setName(event.target.value)}/>
                <TextField 
                    variant="filled"
                    size="small"
                    autoFocus
                    label="Projekt leírása"
                    color="success"
                    type="text" 
                    placeholder="Projekt leírása" 
                    multiline
                    minRows={5}
                    maxRows={10}
                    value={description} 
                    InputProps={{ inputProps: { minLength: 50, maxLength: 500 } }}
                    onChange={(event) => setDescription(event.target.value)}/>
            </div>
        {/* </form> */}
    </div>
    </WizardContext.Provider>
  )
}

export default Page1