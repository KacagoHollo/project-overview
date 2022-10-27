import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

const Navbar = () => {
    const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }
  return (
    <nav className='navbar' style={{backgroundColor:"#3387ac", height: "40px", display:"flex", alignItems: "center", justifyContent:"space-between"}}>
        <div className='left'> 
        <Button 
            onClick={() => nav('/')}
            variant="contained"
            color="info"
            size="small"
            >
              Kezdőlap</Button>
        <Button 
            onClick={() => nav('/new')}
            variant="contained"
            color="info"
            size="small"
            >
              Új projekt hozzáadása</Button>
        </div>
    </nav>
  )
}

export default Navbar