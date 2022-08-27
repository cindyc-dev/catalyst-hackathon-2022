import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Login } from './firebase';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/");
    }

    return (
        <div className="login">
            <Grid container>
                    <Grid item xs={5.3}></Grid>
        
                    <Grid className="loginContent" item xs={6.2}>
                        <h2>Welcome Back!</h2>
                        <form onSubmit={handleSubmit} >
                            <p>
                                <label className="username">Username:</label><br/>
                                <input type="text" name="username" required />
                            </p>
                            <p>
                                <label className="password">Password:</label>
                                {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                                <br/>
                                <input type="password" name="password" required />
                            </p>
                            <div className='buttonGroup'>
                                <Button className="buttonlogin" variant="contained" id="/" type="submit">Login</Button>
                                <p></p>
                                <Button className="buttonlogin" onClick={() => Login('facebook')}>Login with Facebook</Button> 
                                <Button className="buttonlogin" onClick={() => Login('twitter')}>Login with Twitter</Button>                                         
                            </div>
                        </form>
                        <footer>
                            {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
                            {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
                        </footer>
                </Grid>
            </Grid>
        </div>
    )
}