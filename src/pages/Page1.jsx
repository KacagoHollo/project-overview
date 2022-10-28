import React, { useContext } from 'react';
import TextField from "@mui/material/TextField";

import ProgressBar from "@ramonak/react-progress-bar";

import { WizardContext } from '../components/WizardContext';

const Page1 = () => {
    const { nextA,  nameValue, setNameValue, descValue, setDescValue} = useContext(WizardContext);

    const nameChange = (e) => {
        e.preventDefault();
        setNameValue(e.target.value);
        console.log(nameValue);
    }
    const descChange = (e) => {
        e.preventDefault();
        setDescValue(e.target.value);
        console.log(descValue);
    }

    return (
        <WizardContext.Provider value={nameValue}>
    <div className='one'>
        <h1>Első oldal</h1>
        <ProgressBar completed={33} customLabel="1/3" />
        <form onSubmit={nextA}>
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
                    value={nameValue}
                    inputProps={{ maxLength: 255 }}
                    onChange={nameChange}/>
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
                    value={descValue}
                    InputProps={{ inputProps: { minLength: 50, maxLength: 500 } }}
                    onChange={descChange}/>
            </div>
        </form>
    </div>
    </WizardContext.Provider>

  )
}

export default Page1