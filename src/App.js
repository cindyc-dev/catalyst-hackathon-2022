import "./App.css";
import React, { useState } from "react";

import ImageUploading from "react-images-uploading";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TopBar from "./components/TopBar";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Masonry from "./components/Masonry";

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
    const [tabVal, setTabVal] = useState(0);
    const [tabDisable, setTabDisable] = useState(true);
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        if (imageList.length >= 1) {
            setTabDisable(false);
        } else {
            setTabDisable(true);
        }
    };

    return (
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
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    p: 1,
                                    m: 1,
                                    gap: 1,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<FileUploadIcon />}
                                    onClick={onImageUpload}
                                >
                                    Upload
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={onImageRemoveAll}
                                >
                                    Remove all
                                </Button>
                            </Box>
                            <Box
                                height="80vh"
                                display="flex"
                                {...dragProps}
                            >
                              <Masonry
                                imageList = {imageList}
                                onImageRemove = {onImageRemove}
                              />
                            </Box>
                        </Box>
                    )}
                </ImageUploading>
            </TabPanel>
            <TabPanel value={tabVal} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={tabVal} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}

export default App;
