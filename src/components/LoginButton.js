import React from 'react'
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

function LoginButton({ handleClick, icon=<LoginIcon /> }) {
  return (
    <Button
        variant="contained"
        onClick={handleClick}
        startIcon={icon}
    >
        Login
    </Button>
  )
}

export default LoginButton