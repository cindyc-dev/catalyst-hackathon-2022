import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Alert, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const [alertSev, setAlertSev] = useState("")
    const [alertMes, setAlertMes] = useState("")

    const handleSubmit =  (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setAlertSev("success")
                setAlertMes("You have successfully Signed Up!")
                navigate("/login");
            })
            .catch((error) => {
                console.error(error)
                setEmail("")
                setPassword("")
                setConfirmPass("")
                setAlertSev("error")
                setAlertMes(`${error.code} - ${error.message}`)
            });
    }

    return (
        <div className="signup">
            {alertSev.length > 0 ? <Alert severity={alertSev}>{alertMes}</Alert> : null}
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
                            <input type="email" name="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} required />
                        </p>
                        <p>
                            <label>Password:</label><br/>
                            <input type="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} required />
                        </p>
                        <p>
                            <label>Confirm Password:</label><br/>
                            <input type="password" name="password" onChange={(e)=>{setConfirmPass(e.currentTarget.value)}} value={confirmPass} required />
                        </p>
                        <p className="buttonGroup">
                            <Button className="buttonsignup" variant="contained" id="sub_btn" type="submit">Register</Button>
                        </p>
                        <div className='linktoLogin'><p className="links">Have an account? <Link to="/login">Login</Link></p></div>
                    </form>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUpPage;

