import React, {useState, useContext} from 'react';
import { WizardContext } from '../components/WizardContext';
import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";

const Wizard = ({children}) => {

  const { name, setName } = useContext(WizardContext);
  
  const navigate = useNavigate();
  const nav = (path) => {
      console.log('rerouting');
      navigate(path);
  }

  const [activePage, setActivePage] = useState(0)

  const pages = React.Children.toArray(children)
  const currentPage = pages[activePage]

  const previous = () => {
    setActivePage(index => index - 1)
  }

  const next = () => {
    setActivePage(index => index + 1)
  }

  const submit = () => {
    nav('/')
  }

  return (
    <WizardContext.Provider value={{previous, next}}>
      <div className='wizard'>
        <div className='wContent'>
          {currentPage}
        </div>
        <div className='wButton'>
          { activePage > 0 ? (
          <Button
            type='button'
            className='wButton-left'
            color="info"
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
            color="info"
            size="small"
            onClick={next}
            disabled={name}
          >
            Következő
          </Button>
          ) : null }

          { activePage === pages.length - 1 ? (
            <Button
            type='button'
            className='wButton-right'
            color="info"
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

