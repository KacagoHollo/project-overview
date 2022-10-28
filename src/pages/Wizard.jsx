import React, {useState} from 'react';
import { WizardContext } from '../components/WizardContext';
import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";

const Wizard = ({children}) => {

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

  const pages = React.Children.toArray(children)
  const currentPage = pages[activePage]

  const previous = (e) => {
    e.preventDefault();
    setActivePage(index => index - 1)
  }

  const nextA = (e) => {
    e.preventDefault();
    setActivePage(index => index + 1);
    setName(pNames);
    setDescription(pDesc);
    pNames.push(nameValue);
    pDesc.push(descValue);
    setNameValue("");
    setDescValue("");
  }

  const nameArray = () => {
    return (
      <h1>{pNames[0]}</h1>
    )
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
    <WizardContext.Provider value={{next, nextA, nameValue, setNameValue, description, setDescription, pNames, name, nameArray}}>
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

