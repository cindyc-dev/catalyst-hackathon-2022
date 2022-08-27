import "./App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TopBar from "./components/TopBar";
import ImageUpload from "./components/ImageUpload";
import TabBody from "./TabBody";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";


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
    return (
<<<<<<< HEAD
        // <Button
        //           variant="contained"
        //           onClick={() => Login("facebook")}
        //         >
        //           Login
        //         </Button>
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
                <TabBody images={images} />
            </TabPanel>
            <TabPanel value={tabVal} index={2}>
                <TabBody images={images} />
            </TabPanel>
        </div>
=======
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
>>>>>>> 57ad73e239dde6ec75e985c82ba5fb23476906d5
    );
}

const HomePage = () => {
  const [tabVal, setTabVal] = useState(0);
  const [tabDisable, setTabDisable] = useState(true);
  const [images, setImages] = useState([]);
  return (
    <>
      <div className="App" >
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
              <TabBody images={images} />
          </TabPanel>
          <TabPanel value={tabVal} index={2}>
              Item Three
          </TabPanel>
      </div>
    </>
  )
}

export default App;
