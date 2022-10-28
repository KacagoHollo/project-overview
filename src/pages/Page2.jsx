import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ProgressBar from "@ramonak/react-progress-bar";

function Page2() {

    const [inputList, setInputList] = useState([{ name: "", position: "" }]);

    // handle input change
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
};

// handle click event of the Add button
const handleAddClick = () => {
    setInputList([...inputList, { name: "", position: "" }]);
};

  return (
    <div className='two'>
        <h1>Második oldal</h1>
        <ProgressBar completed={66} customLabel="2/3"/>
        {inputList.map((x, i) => {
            return (
                <div key={i} className="college-name">
                    <TextField
                        name="name"
                        value={x.name}
                        variant="filled"
                        size="small"
                        autoFocus
                        label="Projekt munkatárs neve"
                        color="success"
                        type="text" 
                        placeholder="Projekt munkatárs neve"
                        onChange={e => handleInputChange(e, i)}
                        
                />
                    <TextField
                        className="position"
                        name="position"
                        value={x.position}
                        variant="filled"
                        size="small"
                        autoFocus
                        label="Projekt munkatárs pozíciója"
                        color="success"
                        type="text" 
                        placeholder="Projekt munkatárs pozíciója"
                        onChange={e => handleInputChange(e, i)}
                />
                    <div className="btn-box">
                        {inputList.length !== 1 && <Button className="mr10"
                        color='secondary'
                        onClick={() => handleRemoveClick(i)}
                        >Eltávolít</Button>}
                        
                        {inputList.length - 1 === i && <Button
                        onClick={handleAddClick}
                        >Új projekt munkatárs</Button>}
                    </div>
                </div>
            );
        })}
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  )
}

export default Page2;