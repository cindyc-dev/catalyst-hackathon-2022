import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/");
    }

    return (
        <>
            <div className="signup">
                <Grid container>
                    <Grid item className="signupContent" xs={5.5} sx={{padding: "0 150px"}}>
                        <h1>Sign Up!</h1>
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label>Full Name:</label><br/>
                                <input type="text" name="full_name" required />
                            </p>
                            <p>
                                <label>Username:</label><br/>
                                <input type="text" name="first_name" required />
                            </p>
                            <p>
                                <label className="email">Email address:</label><br/>
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
                            <p className="buttonGroup">
                                <Button className="buttonsignup" variant="contained" id="sub_btn" type="submit">Register</Button>
                            </p>
                            <div className='linktoLogin'><p className="links">Have an account? <Link to="/login">Login</Link></p></div>
                        </form>
                    </Grid>
                    <Grid item xs={6.5}></Grid>
                </Grid>
            </div>
        </>
    )

}

