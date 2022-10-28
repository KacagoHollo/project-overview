import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ProgressBar from "@ramonak/react-progress-bar";

import { WizardContext } from '../components/WizardContext';

function Page2() {
    const { next } = useContext(WizardContext);

    const [inputList, setInputList] = useState([{ name: "", position: "" }]);

    // handle input change
const handleNameInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    // setDatas({ ...datas, [name]: value });
    setInputList(list);
};

const handlePositionInputChange = (e, index) => {
    const {position, value } = e.target;
    const list = [...inputList];
    list[index][position] = value;
    // setDatas({ ...datas, [position]: value });
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
                <form onSubmit={next}>
                    <div key={i} className="college-name">
                        <TextField
                            // name="name"
                            name="collegeName"
                            value={x.name}
                            variant="filled"
                            size="small"
                            autoFocus
                            label="Projekt munkatárs neve"
                            color="success"
                            type="text" 
                            placeholder="Projekt munkatárs neve"
                            onChange={e => handleNameInputChange(e, i)}
                            
                    />
                        <TextField
                            className="position"
                            // name="position"
                            name="position"
                            value={x.position}
                            variant="filled"
                            size="small"
                            autoFocus
                            label="Projekt munkatárs pozíciója"
                            color="success"
                            type="text" 
                            placeholder="Projekt munkatárs pozíciója"
                            onChange={e => handlePositionInputChange(e, i)}
                    />
                        <div key={i} className="btn-box">
                            {inputList.length !== 1 && <Button className="mr10"
                            color='secondary'
                            onClick={handleRemoveClick}
                            >Eltávolít</Button>}
                            
                            {inputList.length - 1 === i && <Button
                            onClick={handleAddClick}
                            >Új projekt munkatárs</Button>}
                        </div>
                    </div>
                </form>
            );
        })}
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  )
}

export default Page2;