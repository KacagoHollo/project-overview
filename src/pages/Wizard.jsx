import React, {useState} from 'react';
import Button from "@mui/material/Button";

const Wizard = ({children}) => {
  const [activePage, setActivePage] = useState(0)

  const pages = React.Children.toArray(children)
  const currentPage = pages[activePage]

  const previous = () => {
    setActivePage(index => index - 1)
  }

  const next = () => {
    setActivePage(index => index + 1)
  }

  return (
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

        { activePage < pages.length + 1 ? (   
        <Button
          type='button'
          className='wButton-right'
          color="info"
          size="small"
          onClick={next}
        >
          Következő
        </Button>
        ) : null }
      </div>
    </div>
  )
}

export default Wizard;

