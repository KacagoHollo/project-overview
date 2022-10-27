import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

import project from '../data/project'
import Display from '../components/Display';

function Home() {
    const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }
  return (
    <main>
        {project.projektek.map((item, i) => (
              <Display item={item} key={i}/>
            ))}

        <footer>
            <Button 
                onClick={() => nav('/new')}
                variant="contained"
                color="info"
                size="small"
                >Új projekt</Button>

        </footer>
    </main>
  )
}

export default Home;