import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Login } from './firebase';

export default function LoginPage() {
    return (
        <div className="login">
            <Grid container spacing={2}>
                    <Grid item xs={6}></Grid>
        
                    <Grid item xs={6}>
                        <h2>Welcome Back!</h2>
                        <form action="/home">
                            <p>
                                <label>Username:</label><br/>
                                <input type="text" name="first_name" required />
                            </p>
                            <p>
                                <label>Password:</label>
                                {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                                <br/>
                                <input type="password" name="password" required />
                            </p>
                            <p>
                                <Button onClick={() => Login('facebook')}>Login with Facebook</Button>
                                <Button onClick={() => Login('twitter')}>Login with Twitter</Button>
                                <button id="sub_btn" type="submit">Login</button>
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