import React, {useState, useEffect, useContext} from 'react';
import { WizardContext } from '../components/WizardContext';
import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";

const Wizard = ({children}) => {

  // const name = useContext(WizardContext);
  // const setName = useContext(WizardContext);
  // const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [nameValue, setNameValue] = useState("")
  const [descValue, setDescValue] = useState("")
  let pNames = [];
  let pDesc = [];
  
  const navigate = useNavigate();
  const nav = (path) => {
      console.log('rerouting');
      navigate(path);
  }

  const [activePage, setActivePage] = useState(0);

  const [name, setName] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  // const [state, setState] = useState([]);
  // const [datas, setDatas] = useState({});
  // const [add, setAdd] = useState([]);

  const pages = React.Children.toArray(children)
  const currentPage = pages[activePage]

  const previous = (e) => {
    e.preventDefault();
    setActivePage(index => index - 1)
  }

  const nextA = (e) => {
    
    setActivePage(index => index + 1);
    setName([pNames]);
    setDescription([pDesc]);
    pNames.push(nameValue);
    pDesc.push(descValue);
    setNameValue("");
    setDescValue("");
  }
  const next = (e) => {
    e.preventDefault();
    setActivePage(index => index + 1);

  }

  console.log(pNames);
  console.log(name);


  const submit = async (e) => {
    e.preventDefault();

    await pNames.push(nameValue);
    await pDesc.push(descValue);
    nav('/succeed')
  }



    
    
  return (
    <WizardContext.Provider value={{next, nextA, nameValue, setNameValue, description, setDescription, pNames}}>
      <div className='wizard'>
        <div className='wContent'>
          {currentPage}
        </div>
        <div className='wButton'>
          { activePage > 0 ? (
          <Button
            type='button'
            className='wButton-left'
            color="success"
            size="small"
            onClick={previous}
          >
            Vissza
          </Button>
          ) : null }

          { activePage < pages.length + 1 && activePage < pages.length - 1 ? (   
          <Button
            type='button'
            className='wButton-right'
            color="success"
            size="small"
            // disabled={!name}
            onClick={next}
          >
            Következő
          </Button>
          ) : null }

          { activePage === pages.length - 1 ? (
            <Button
            type='submit'
            className='wButton-right'
            color="secondary"
            variant="contained"
            size="small"
            onClick={submit}
          >
            Beküldés
          </Button>
            ) : null
          }
        
        </div>
      </div>
    </WizardContext.Provider>
  )
}

export default Wizard;

