import React from 'react'
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div style={{zIndex: 5, position: 'fixed', border: '1px solid black', textAlign: 'center', width: '100%',height: '11rem', backgroundColor: 'white'}}>
    <h1>My Store</h1>
    <Button component={NavLink} to="/" variant="contained">
        Men
    </Button>
    <Button component={NavLink} to="/women" variant="contained">
        Women
    </Button>
    </div>
  )
}

export default Header