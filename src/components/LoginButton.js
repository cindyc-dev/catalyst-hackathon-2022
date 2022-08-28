import React from 'react'
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

function LoginButton({ name, handleClick, icon=<LoginIcon /> }) {
  return (
    <Button
        variant="contained"
        onClick={handleClick}
        startIcon={icon}
    >
        {name} Login
    </Button>
  )
}

export default LoginButton