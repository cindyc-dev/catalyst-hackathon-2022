import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';

export default function SignUpPage() {
    return (
        <>
            <div className="signup">
                <Grid container spacing={2}>
                    <Grid item xs={6}></Grid>
        
                    <Grid item xs={6}>
                        <h2>Sign Up!</h2>
                        <form action="/home">
                            <p>
                                <label>Full Name:</label><br/>
                                <input type="text" name="first_name" required />
                            </p>
                            <p>
                                <label>Username:</label><br/>
                                <input type="text" name="first_name" required />
                            </p>
                            <p>
                                <label>Email address:</label><br/>
                                <input type="email" name="email" required />
                            </p>
                            <p>
                                <label>Password:</label><br/>
                                <input type="password" name="password" required />
                            </p>
                            <p>
                                <label>Confirm Password:</label><br/>
                                <input type="password" name="password" required />
                            </p>
                            <p>
                                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                            </p>
                            <p>
                                <button id="sub_btn" type="submit">Register</button>
                            </p>
                        </form>
                        <footer>
                            {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
                        </footer>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

