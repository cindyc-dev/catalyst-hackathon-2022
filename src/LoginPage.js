import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Login } from './firebase';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage({ user, setUser }) {
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [alertSev, setAlertSev] = useState("")
    const [alertMes, setAlertMes] = useState("")
    
    const navigate = useNavigate();
    if (user) {
        return <Navigate to="/" />
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(userCredential.user)
            console.log(user)
            navigate("/");
            setAlertSev("success")
            setAlertMes("You have successfully Signed Up!")
        })
        .catch((error) => {
            console.error(error)
            setEmail("")
            setPassword("")
            setAlertSev("error")
            setAlertMes(`${error.code} - ${error.message}`)
        });
    }

    return (
        <div className="login">
            <Grid container>
                    <Grid item xs={5.3}></Grid>
                    <Grid className="loginContent" item xs={6.2}>
                        <h2>Welcome Back!</h2>
                        <form onSubmit={handleSubmit} >
                            <p>
                                <label className="email">Email:</label><br/>
                                <input type="text" name="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} required />
                            </p>
                            <p>
                                <label className="password">Password:</label>
                                {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                                <br/>
                                <input type="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} required />
                            </p>
                            <div className='buttonGroup'>
                                <Button className="buttonlogin" variant="contained" id="/" type="submit">Login</Button>
                                <p></p>
                                <Button className="buttonlogin" onClick={() => Login('facebook')}>Login with Facebook</Button> 
                                <Button className="buttonlogin" onClick={() => Login('twitter')}>Login with Twitter</Button> 
                                <p className="linktoSignUp">Don't have an account? <Link to="/signup">Register</Link></p>
                            </div>
                        </form>
                </Grid>
            </Grid>
        </div>
    )
}