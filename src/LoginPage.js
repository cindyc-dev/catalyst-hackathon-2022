import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Login } from './firebase';

export default function LoginPage() {
    return (
        <div className="login">
            <Grid container>
                    <Grid item xs={6}></Grid>
        
                    <Grid className="loginContent" item xs={6}>
                        <h2>Welcome Back!</h2>
                        <form action="/home">
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
                            <p>
                                <Button onClick={() => Login('facebook')}>Login with Facebook</Button>
                                <Button onClick={() => Login('twitter')}>Login with Twitter</Button>
                                <Button variant="contained" id="sub_btn" type="submit">Login</Button>
                            </p>
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