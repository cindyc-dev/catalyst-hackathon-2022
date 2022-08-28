import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import ImageUpload from "./components/ImageUpload";
import TabBody from "./TabBody";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import { Login } from "./firebase";
import LoginButton from "./components/LoginButton";
import FirebaseAuthContext from "./FirebaseAuthContext";
import ProtectedRoute from "./ProtectedRoute";

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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            console.log("Not logged in");
        }
    });
    return (
        <FirebaseAuthContext>
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </FirebaseAuthContext>
    );
}

async function LoginTo(method) {
    let data = await Login(method);
    localStorage.setItem(method, data.accessToken);
}

const HomePage = () => {
    const [tabVal, setTabVal] = useState(0);
    const [tabDisable, setTabDisable] = useState(true);
    const [images, setImages] = useState([]);

    return (
        <>
            <div className="App">
                <TopBar
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
                            handleClick={() => {
                                LoginTo("facebook");
                            }}
                        />
                    )}
                </TabPanel>
                <TabPanel value={tabVal} index={2}>
                    <TabBody images={images} />
                </TabPanel>
            </div>
        </>
    );
};

export default App;
