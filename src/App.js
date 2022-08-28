import "./App.css";
import { getAuth } from "firebase/auth";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import TopBar from "./components/TopBar";
import ImageUpload from "./components/ImageUpload";
import TabBody from "./components/TabBody";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import { Login } from "./firebase";
import LoginButton from "./components/LoginButton";
import FirebaseAuthContext from "./FirebaseAuthContext";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function App() {
    const [user, setUser] = useState(null)
    const auth = getAuth();

    useEffect(() => {
        const currentUser = auth.currentUser;
        setUser(currentUser)
        console.log(`currentUser: ${currentUser}`)
    }, [auth.currentUser])

    return (
        <FirebaseAuthContext>
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
                    <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
                </Routes>
            </Router>
        </FirebaseAuthContext>
    );
}

async function LoginTo(method) {
    let data = await Login(method);
    localStorage.setItem(method, data.accessToken);
}

const HomePage = ({ user, setUser }) => {
    const [tabVal, setTabVal] = useState(0);
    const [tabDisable, setTabDisable] = useState(true);
    const [images, setImages] = useState([]);

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <div className="App">
                <TopBar
                    setUser={setUser}
                    tabVal={tabVal}
                    setTabVal={setTabVal}
                    tabDisable={tabDisable}
                />
                <TabPanel value={tabVal} index={0}>
                    <ImageUpload
                        images={images}
                        setImages={setImages}
                        setTabDisable={setTabDisable}
                    />
                </TabPanel>
                <TabPanel value={tabVal} index={1}>
                    {localStorage.getItem("facebook") ? (
                        <TabBody images={images} />
                    ) : (
                        <LoginButton
                            name={"facebook"}
                            handleClick={() => {
                                LoginTo("facebook");
                            }}
                        />
                    )}
                </TabPanel>
                <TabPanel value={tabVal} index={2}>
                    {localStorage.getItem("twitter") ? (
                        <TabBody images={images} />
                    ) : (
                        <LoginButton
                            name={"twitter"}
                            handleClick={() => {
                                LoginTo("twitter");
                            }}
                        />
                    )}
                </TabPanel>
            </div>
        </>
    );
};

export default App;
