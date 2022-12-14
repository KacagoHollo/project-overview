import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ProgressBar from "@ramonak/react-progress-bar";

import { WizardContext } from '../components/WizardContext';

function Page3() {
    const { submit } = useContext(WizardContext);

    const [inputList, setInputList] = useState([{ link: ""}]);

    // handle input change
const handleInputChange = (e, index) => {
    const { link, value } = e.target;
    const list = [...inputList];
    list[index][link] = value;
    // setDatas({ ...datas, [link]: value });
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
    setInputList([...inputList, { link: "" }]);
};

  return (
    <div className='three'>
        <h1>Utolsó oldal</h1>
        <ProgressBar completed={99} customLabel="3/3"/>
        {inputList.map((x, i) => {
            return (
                <form onSubmit={submit}>
                    <div key={i} className="link">
                        <TextField
                            name="link"
                            value={x.link}
                            variant="filled"
                            size="small"
                            autoFocus
                            label="Projekthez kapcsolódó link"
                            color="success"
                            type="text" 
                            placeholder="Projekthez kapcsolódó link"
                            onChange={e => handleInputChange(e, i)}           
                    />      
                        <div className="btn-box">
                            {inputList.length !== 1 && <Button className="mr10"
                            color='secondary'
                            onClick={() => handleRemoveClick(i)}
                            >Eltávolít</Button>}
                            
                            {inputList.length - 1 === i && <Button
                            onClick={handleAddClick}
                            >Új link</Button>}
                        </div>
                    </div>
                </form>
            );
        })}
    </div>
  )
}

export default Page3