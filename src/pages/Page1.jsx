import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField";

import ProgressBar from "@ramonak/react-progress-bar";

import { WizardContext } from '../components/WizardContext';

const Page1 = () => {
    const { next, name, setName,  description, setDescription, nameValue, setNameValue, descValue, setDescValue} = useContext(WizardContext);

    // const [nameValue, setNameValue] = useState("")
    // const [descValue, setDescValue] = useState("")
    // const [name, setName] = useState([]);
    // const [description, setDescription] = useState([]);
    // let pNames = [];
    // let pDesc = [];

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

    const handleFormSubmit = () => {
        // setName([pNames]);
        // setDescription([pDesc]);
        // pNames.push(nameValue);
        // pDesc.push(descValue);
        // setNameValue("");
        // setDescValue("");
    }
    // const descFormSubmit = (e) => {
    //     setDescription([pDesc]);
    //     pDesc.push(value);
    //     setValue("")
    // }
    // const descInputChange = (e) => {
    //         setDescription(description)
        // }
    // const { name, value } = e.target;
        // setDatas({ ...datas, [name]: value });

    // const descriptionChange = (e) => {
    //     const { description, value } = e.target;
    //     // setDatas({ ...datas, [description]: value });
    //   }
    // console.log(pNames);
    // console.log(pDesc);

    return (
    <div className='one'>
        <h1>Első oldal</h1>
        <ProgressBar completed={33} customLabel="1/3" />
        <form onSubmit={next}>
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

  )
}

export default Page1