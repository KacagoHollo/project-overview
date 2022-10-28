import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <div>
        <h1>Második oldal</h1>
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
                        {inputList.length !== 1 && <button className="mr10"
                        onClick={() => handleRemoveClick(i)}
                        >Remove</button>}
                        
                        {inputList.length - 1 === i && <Button
                        onClick={handleAddClick}
                        >Add</Button>}
                    </div>
                </div>
            );
        })}
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  )
}

export default Page2;